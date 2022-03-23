// Criando a lógica do projeto GuessNumber

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status')
let attempt = document.getElementById('attempt')
let result = document.getElementById('result')

const Guess = {  //Obj
    max: 10,
    attemptsNumber: 0,
    NumberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
}

let NumberDrawn = Guess.NumberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
}

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {             //! = não; se não for igual ao chute
        alert('Digite algum valor!')
        return;
    }

    updateAttempt(attempt, ++Guess.attemptsNumber)

    if(NumberDrawn == kick) {     // Se o chute for = o que foi pensando pelo sistema
        playAgain();
        statusbar.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        statusbar.style.color = '#fff';
        clear();
    } else if(NumberDrawn > kick) {
        statusbar.innerHTML = 'O número é maior!';
        result.style.color = '#de4251';
        clear();
    } else if(NumberDrawn < kick) {
        statusbar.innerHTML = 'O número é menor!';
        result.style.color = '#de4251';
        clear();
    }
}

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';   //Assim que termina o jogo ela chama essa função, pois deixei como none no CSS
}

function restart() {
    document.location.reload(true);
}

function clear() {
    document.getElementById('kick').value = '';
}
