'use strict'

const ALIEN_SPEED = 500;

// The following two variables represent the part of the matrix (some rows) // that we should shift (left, right, and bottom) // We need to update those when: // (1) shifting down and (2) last alien was cleared from row 
var gIntervalAliens
var gAliensTopRowIdx
var gAliensBottomRowIdx

var gIsAlienFreeze = true



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

    var elVictory = document.querySelector('h1 span')

    elVictory.style.display = 'none'

    var elMesseg = document.querySelector('h5')




    if (gBoard[pos.i][pos.j].gameObject === ALIEN) gGame.aliensCount--

        if (gGame.aliensCount === 0) {
            gGame.isOn = false

            elVictory.style.display = 'block'
            elMesseg.innerText = 'you have saved planet earth'


            //gHero.isShoot = false
        }

    console.log(gGame.aliensCount)

}


function shiftBoardRight(board, fromI, toI) {









    // updateCell({ i: 0, j: 0 })
    // updateCell({ i: 0, j: 8 }, ALIEN)
    //     // updateCell({ i: 0, j: 1 })
    //     // updateCell({ i: 0, j: 9 }, ALIEN)
    //     // updateCell({ i: 0, j: 2 })
    //     // updateCell({ i: 0, j: 10 }, ALIEN)
    // updateCell({ i: 0, j: 3 })
    // updateCell({ i: 0, j: 11 }, ALIEN)
    // updateCell({ i: 0, j: 4 })
    // updateCell({ i: 0, j: 12 }, ALIEN)
    // updateCell({ i: 0, j: 5 })
    // updateCell({ i: 0, j: 13 }, ALIEN)

}

function shiftBoardLeft(board, fromI, toI) {
    updateCell()

}

function shiftBoardDown(board, fromI, toI) {


}

// runs the interval for moving aliens side to side and down // it re-renders the board every time // when the aliens are reaching the hero row - interval stops
function moveAliens(board, fromI, toI) {





}