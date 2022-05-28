'use strict'

// Returns a new cell object. e.g.: {type: SKY, gameObject: ALIEN} 
function createCell(gameObject = null) {
    return { type: SKY, gameObject: gameObject }
}

function getElCell(pos) {
    return document.querySelector(`[data-i='${pos.i}'][data-j='${pos.j}']`)
}

// position such as: {i: 2, j: 7}
function updateCell(pos, gameObject = null) {

    gBoard[pos.i][pos.j].gameObject = gameObject

    var elCell = getElCell(pos)

    elCell.innerHTML = gameObject

}

function findNeighbors({ i, j }) {

    var rowIdx = i

    var colIdx = j


    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {

        if (i < 0 || i > gBoard.length - 1) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {

            if (j < 0 || j > gBoard[i].length - 1) continue

            if (i === rowIdx && j === colIdx) continue
            var currCell = gBoard[i][j]

            if (currCell.gameObject === ALIEN) {
                updateCell({ i, j })
                gGame.aliensCount--

            }
        }
    }

}

function getEmptyCell() {
    var emptyCells = []
    for (var i = gAliensTopRowIdx; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            if (gBoard[i][j].gameObject === null) {
                emptyCells.push({ i, j })
            }

        }
    }

    return emptyCells
}

function getAlienCell() {
    var emptyCells = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            if (gBoard[i][j].gameObject === ALIEN) {
                emptyCells.push({ i, j })
            }

        }
    }

    return emptyCells
}