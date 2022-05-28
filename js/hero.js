'use strict'



var gLaserSpeed

var gLaserPos

var gLaserInterval

var gHero = { pos: { i: 12, j: 5 }, isShoot: false };

var gLaserNegs

var gSuperModeCount = 3
    // creates the hero and place it on board 
function createHero(board) {

    board[gHero.pos.i][gHero.pos.j].gameObject = HERO

}

// Handle game keys 
function onKeyDown(ev) {
    // var elBtn = document.querySelector('.startBtn')

    // elBtn.display = 'none'

    if (!gGame.isOn) {
        !gHero.shoot
    } else {
        gHero.shoot
    }



    clearInterval(gLaserInterval)
    console.log('ev ', ev)

    var i = gHero.pos.i - 1
    var j = gHero.pos.j

    gLaserPos = { i, j }
    if (gGame.shoot && ev.code === 'Space' && gLaserPos.i > 0 &&
        gBoard[0][j].gameObject !== null) {
        gLaser = '⤊'
        gLaserSpeed = 80
        shoot()
    } else if (gGame.shoot && ev.code === 'KeyX' &&
        gLaserPos.i > 0 &&
        gBoard[0][j].gameObject !== null) {
        superMode()
    }


    switch (ev.key) {
        case 'ArrowLeft':
            moveHero(j - 1)
            break;
        case 'ArrowRight':
            moveHero(j + 1)
            break;
        case 'n':
            blowUpNeighbors(gLaserNegs)
            break;
    }
}

// Move the hero right (1) or left (-1) 
function moveHero(dir) {
    if (dir < 0 || dir > gBoard.length - 1) return

    //update model: hero current pos clear
    //update DOM: hero current pos 
    updateCell(gHero.pos)

    //update model: hero next pos 
    gHero.pos.j = dir

    //update DOM: hero next pos 
    updateCell(gHero.pos, HERO)


    console.table(gBoard)
}

// Sets an interval for shutting(blinking) the laser up towards aliens
function shoot() {

    gLaserInterval = setInterval(() => {

        gLaserPos.i--

            if (gLaserPos.i < 0) {

                gLaserPos.i = 11

                //updateCell(gLaserPos)
                //clearInterval(gLaserInterval)
            }

        blinkLaser(gLaserPos)

    }, gLaserSpeed)

    gLaserPos.j === gHero.pos.j

}

// renders a LASER at specific cell for short time and removes it 
function blinkLaser(pos) {

    if (gBoard[gLaserPos.i][gLaserPos.j].gameObject === ALIEN) {

        handleAlienHit(pos)

        gLaserNegs = pos

        gHero.isShoot = false

        updateCell(pos)

        clearInterval(gLaserInterval)

    }

    updateCell(pos, gLaser)

    console.log(pos)

    //TO DO:delet setTimeOut 

    setTimeout(() => {

        updateCell(pos)

    }, 40)


    console.log(gBoard)
}

function blowUpNeighbors(pos) {
    findNeighbors(pos)
}

function superMode() {

    var elSuperMode = document.querySelector('.super1')

    elSuperMode.innerHTML = gSuperModeCount

    if (gSuperModeCount > 0) {

        gSuperModeCount--

        elSuperMode.innerHTML = gSuperModeCount

        console.log('gSuperModeCount ', gSuperModeCount)

        gLaserSpeed = 40

        gLaser = '^'

        shoot()

    } else if (gSuperModeCount === 0) {

        return

    }


}