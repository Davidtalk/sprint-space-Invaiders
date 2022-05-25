'use strict'

const LASER_SPEED = 80;
var gLaserPos = { i: 11, j: 5 }

var gLaserInterval
var gHero = { pos: { i: 12, j: 5 }, isShoot: false };

// creates the hero and place it on board 
function createHero(board) {
    board[gHero.pos.i][gHero.pos.j].gameObject = HERO

}

// Handle game keys 
function onKeyDown(ev) {
    var j = gHero.pos.j

    if (ev.code === 'Space') {
        gHero.isShoot = true
        console.log(gHero.isShoot)
        shoot()
        console.log(gHero.isShoot)
    }

    switch (ev.key) {
        case 'ArrowLeft':
            moveHero(j - 1)
            break;
        case 'ArrowRight':
            moveHero(j + 1);
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

// Sets an interval for shutting (blinking) the laser up towards aliens 
function shoot() {
    gLaserInterval = setInterval(() => {
        gLaserPos.i
        console.log(gLaserPos)
        updateCell(gLaserPos)
        gLaserPos.i--
            blinkLaser(gLaserPos)
        gHero.isShoot = false
    }, LASER_SPEED)
    var j = gHero.pos.j
    gLaserPos.j = j
    updateCell(gLaserPos, LASER)

}

// renders a LASER at specific cell for short time and removes it 
function blinkLaser(pos) {

    if (gBoard[gLaserPos.i][gLaserPos.j].gameObject !== ALIEN) {
        updateCell(pos, LASER)

        updateCell(gLaserPos, LASER)
    } else {
        clearInterval(gLaserInterval)
        updateCell(pos)
    }
    console.log(pos)
}