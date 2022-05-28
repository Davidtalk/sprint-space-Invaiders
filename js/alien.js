'use strict'

const ALIEN_SPEED = 500;


// The following two variables represent the part of the matrix (some rows) // that we should shift (left, right, and bottom) // We need to update those when: // (1) shifting down and (2) last alien was cleared from row 
var gAliensTopRowIdx
var gAliensBottomRowIdx
var gEmptyCells
var gIsAlienFreeze = true

var gIntervalAliens


function createAliens(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (i < 3 && j < ALIENS_ROW_LENGTH) {
                board[i][j].gameObject = ALIEN
                gGame.aliensCount++
            }

        }
    }
    console.log('gGame.aliensCount ', gGame.aliensCount)
}


function handleAlienHit(pos) {



    var elVictory = document.querySelector('.victory')

    elVictory.style.display = 'none'

    var elMesseg = document.querySelector('h5')

    var elBtn = document.querySelector('button')
    console.log(elBtn)



    if (gBoard[pos.i][pos.j].gameObject === ALIEN) gGame.aliensCount--

        if (gGame.aliensCount === 0) {
            gGame.isOn = false
            clearInterval(gIntervalAliens)
            elVictory.style.display = 'block'
            elMesseg.innerText = 'you have saved planet earth'
            elBtn.style.innerText = 'restart'


            //gHero.isShoot = false
        }

    console.log(gGame.aliensCount)

}


function shiftBoardRight(board, fromI, toI) {



    updateCell({ i: fromI.i, j: fromI.j }, EMPTY)
    if (toI.i === 12 && toI.j === 0) {
        clearInterval(gIntervalAliens)
        var elVictory = document.querySelector('.victory')
        elVictory.innerText = 'Earth is doomed-game over'
        elVictory.style.display = 'block'
        gGame.isOn = false
        return
    }
    updateCell({ i: toI.i, j: toI.j }, ALIEN)
    if (toI.i === gAliensBottomRowIdx && toI.j === gBoard.length - 1) {
        gEmptyCells.splice(0, 6)


    }

}

function shiftBoardLeft(board, fromI, toI) {


}

function shiftBoardDown(board, fromI, toI) {

    // updateCell({ i: fromI.i, j: fromI.j }, EMPTY)
    // if (toI.i === 12 && toI.j === 0) return
    // updateCell({ i: toI.i, j: toI.j }, ALIEN)
    // if (toI.i === gAliensBottomRowIdx && toI.j === gBoard.length - 1)
    //     board.splice(7, 13)


}

// runs the interval for moving aliens side to side and down // it re-renders the board every time // when the aliens are reaching the hero row - interval stops
// function moveAliens() {
//     gAliensTopRowIdx = 0
//     gAliensBottomRowIdx = 1
//     var emptyCells = getEmptyCell()
//     var rowIdx = 0
//     gIntervalAliens = setInterval(() => {

//         //  console.table('emptyCells ', emptyCells, emptyCells.length)


//         var emptyCell = emptyCells.splice(0, 1)[0]

//         console.log('emptyCells ', emptyCell)

//         var prevCell = { i: gAliensTopRowIdx, j: rowIdx }
//         shiftBoardRight(prevCell, emptyCell.i, emptyCell.j)
//         rowIdx++
//         if (rowIdx > 5) {
//             rowIdx = 0
//             gAliensTopRowIdx++
//         }
//     }, 100);
//     shiftBoardDown(gBoard, emptyCell.i, emptyCell.j)


// }

// function moveAliens() {
//     gAliensTopRowIdx = 0
//     gAliensBottomRowIdx = 2
//     var colIdx = 0
//     var rowIdx = 0
//     gEmptyCells = getEmptyCell()
//     gIntervalAliens = setInterval(() => {

//         var fromI = { i: rowIdx, j: colIdx }
//             //  console.table('emptyCells ', emptyCells, emptyCells.length)


//         var toI = gEmptyCells.splice(0, 1)[0]

//         // console.log('emptyCells ', emptyCell)


//         shiftBoardRight(gEmptyCells, fromI, toI)
//         colIdx++
//         if (colIdx > 5) {
//             colIdx = 0
//             rowIdx++
//         }
//         if (gBoard[gAliensBottomRowIdx][gBoard.length - 1].gameObject === ALIEN) {
//             var aliens = getAlienCell()
//             var alien = aliens.splice(0, 1)[0]

//             toI = gEmptyCells.splice(0, 1)[0]
//             shiftBoardDown(gEmptyCells, alien, toI)

//         }
//     }, 100);
//     // shiftBoardDown(gBoard, emptyCell.i, emptyCell.j)


// }
function moveAliens() {
    gAliensTopRowIdx = 0
    gIntervalAliens = setInterval(() => {
        var gAliens = getAlienCell()
        gEmptyCells = getEmptyCell()
        var fromI = gAliens.splice(0, 1)[0]
        var toI = gEmptyCells.splice(0, 1)[0]

        shiftBoardRight(gEmptyCells, fromI, toI)
    }, ALIEN_SPEED);



}