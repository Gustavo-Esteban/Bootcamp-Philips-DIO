const mario = document.querySelector('.mario');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 20;
                mario.style.bottom = position + 'px';
            }, 20);
        } else {
            position += 20;
            mario.style.bottom = position + 'px';
        }
    }, 20);
}

function createCano() {
    const cano = document.createElement('div');
    let canoPosition = 1000;
    let randomTime = Math.random() * 6000;

    cano.classList.add('cano');
    cano.style.left = 1000 + 'px';
    background.appendChild(cano);

    let leftInterval = setInterval(() => {
        if (canoPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cano);
        } else if (canoPosition > 0 && canoPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo!</h1>';
        }else {
            canoPosition -= 10;
            cano.style.left = canoPosition + 'px';
        }
    }, 20);

    setTimeout(createCano, randomTime);
}

createCano();
document.addEventListener('keyup', handleKeyUp);