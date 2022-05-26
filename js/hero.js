'use strict'

var laserSpeed = 80;

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
    var elBtn = document.querySelector('button')



    if (!gGame.isOn) return
    clearInterval(gLaserInterval)
    console.log('ev ', ev)

    var i = gHero.pos.i - 1
    var j = gHero.pos.j

    gLaserPos = { i, j }

    if (ev.code === 'Space' &&
        gLaserPos.i > 0 &&
        gBoard[0][j].gameObject !== null) {
        gHero.isShoot = true
        if (gHero.isShoot) elBtn.display = 'none'

        shoot()
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
        case 'x':
            superMode()
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
                clearInterval(gLaserInterval)
            }

        blinkLaser(gLaserPos)

    }, laserSpeed)

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
    console.log(elSuperMode)
    if (gSuperModeCount > 0) {
        gSuperModeCount--
        elSuperMode.innertext === gSuperModeCount

        laserSpeed /= 2
        gLaser = '^'
    } else if (gSuperModeCount === 0) {
        gLaser = '⤊'
        laserSpeed = 80
        return
    }

}