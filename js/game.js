'use strict'

const BOARD_SIZE = 14
const ALIENS_ROW_LENGTH = 8
const ALIENS_ROW_COUNT = 3
const HERO = '♆'
const ALIEN = '👽'
const SKY = 'sky'
const EARTH = 'earth'

var gLaser = '⤊'


//Done:gIntervalLaser
var gLaserInterval

// Matrix of cell objects. e.g.: {type: SKY, gameObject: ALIEN} 
var gBoard

var gGame = {
    isOn: false,
    aliensCount: 0
}

// Called when game loads

function init() {

    gGame.aliensCount = 0


    gGame.isOn = false


    gBoard = createBoard()

    createHero(gBoard)

    createAliens(gBoard)

    renderBoard(gBoard)


    console.table(gBoard)

}

function isGameOn(elBtn) {
    init()
    console.log(elBtn)

    gGame.isOn = true

}

function createBoard() {

    var board = []
    var cell

    for (var i = 0; i < BOARD_SIZE; i++) {

        var row = []

        for (var j = 0; j < BOARD_SIZE; j++) {

            cell = createCell()

            if (i === BOARD_SIZE - 1) {

                cell.type = EARTH
            }
            row.push(cell)
        }
        board.push(row)
    }

    return board
}

// Render the board as a <table> to the page 
function renderBoard(board) {

    var strHTML = ''

    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>\n'

        for (var j = 0; j < board[0].length; j++) {

            var currCell = board[i][j]

            var pos = { i: i, j: j }

            strHTML += `\t<td data-i=${pos.i} data-j=${pos.j}>\n`;

            if (currCell.gameObject === ALIEN)
            //update DOM with aliens
                strHTML += ALIEN

            if (i === gHero.pos.i && j === gHero.pos.j)

            //update DOM with hero
                strHTML += HERO

            strHTML += '\t</td>\n';
        }
        strHTML += '</tr>\n';

    }

    var elMat = document.querySelector('.game-board')
    elMat.innerHTML = strHTML
}