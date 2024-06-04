const catawsElement = document.querySelector('.png-cataws');
const autoMoveElement = document.getElementById('autoMoveElement');

let catawsPosition = 200; // Posición inicial de Cataws
let autoPosition = 20;
let direction = 1;
let isJumping = false;

function moveCatawsLeft() {
    catawsPosition = Math.max(0, catawsPosition - 10);
    catawsElement.style.left = catawsPosition + 'px';
}

function moveCatawsRight() {
    catawsPosition = Math.min(window.innerWidth - catawsElement.offsetWidth, catawsPosition + 10);
    catawsElement.style.left = catawsPosition + 'px';
}

function jumpCataws() {
    if (!isJumping) {
        isJumping = true;
        catawsElement.style.bottom = '200px';
        setTimeout(() => {
            catawsElement.style.bottom = '0';
            isJumping = false;
        }, 400);
    }
}

function autoMove() {
    if (autoPosition <= 0) {
        direction = 1;
    } else if (autoPosition >= 100) {
        direction = -1;
    }
    autoPosition += direction * 1;
    autoMoveElement.style.left = autoPosition + '%';
    setTimeout(autoMove, 100);
}

function autoJump() {
    autoMoveElement.style.bottom = '200px';
    setTimeout(() => {
        autoMoveElement.style.bottom = '0';
    }, 400);
    setTimeout(autoJump, 2000);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveCatawsLeft();
    } else if (event.key === 'ArrowRight') {
        moveCatawsRight();
    } else if (event.key === 'ArrowUp' || event.key === ' ') {
        jumpCataws();
    }
});

autoMove();
autoJump();

