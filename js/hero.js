'use strict'
console.log('hero')

const LASER_SPEED = 80;
var gHero = { pos: { i: 12, j: 5 }, isShoot: false };

// creates the hero and place it on board 
function createHero(board) {
    board[gHero.pos.i][gHero.pos.j].gameObject = HERO
}

// Handle game keys 
function onKeyDown(ev) {
    console.log(ev)
    var i = gGamerPos.i;
    var j = gGamerPos.j;


    switch (dir.key) {
        case 'ArrowLeft':
            moveHero(i, j - 1);
            break;
        case 'ArrowRight':
            moveHero(i, j + 1);
            break;
    }

}

// Move the hero right (1) or left (-1) 
function moveHero(dir) {
    // if (i < 0 || i > gBoard.length - 1) return


    console.log('dir ', dir)
}

// Sets an interval for shutting (blinking) the laser up towards aliens 
function shoot() {

}

// renders a LASER at specific cell for short time and removes it 
function blinkLaser(pos) {

}