const butDiv = document.getElementById('butDiv');
const butRok = document.getElementById('rock');
const butPap = document.getElementById('paper');
const butScs = document.getElementById('scissors');
const divScor = document.getElementById('scores');
const divOps = document.getElementById('oponents');
const divPlSc = document.getElementById('player_score');
const divPcSc = document.getElementById('computer_score');
const divOut = document.getElementById('outcome');
const btnRest = document.getElementById('play_again');
const popLog = document.getElementById('popup_log');
const overlay = document.getElementById('modal_overlay');
const gameOver = document.getElementById('modal_popup');

butRok.addEventListener('click', playRound);
butPap.addEventListener('click', playRound);
butScs.addEventListener('click', playRound);
btnRest.addEventListener('click', EndEndGame);


let scrPl=0;
let scrPc=0;

function computerPlay (){
    const arr=['rock', 'paper', 'scissors'];

    let rand= arr[Math.floor(Math.random()*(arr.length))];     
    rand = rand.toString ();
    console.log(rand);
    console.log(typeof(rand));
    return rand;
}

function playRound(event) {
    let computerSelection = computerPlay();
    let playerSelection = event.target.getAttribute('potez');
    let log ='';
    
    if (playerSelection === computerSelection) {
        log = "A match was struck... yet no winner has emerged...";
    } else if (
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            scrPl++;
            log = "You won this round!"
    } else if (
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ){
            scrPc++;
            log = "You lost this round!"
        }
        
    divPlSc.textContent = "You won: " + scrPl + " rounds!" ;
    divPcSc.textContent = "PC has won: " + scrPc + " rounds!";
    divOut.textContent = log;
    
    if (scrPl==5 && scrPc < 5) {
        divOut.textContent = log + " Now, with the total of 5 victories, you have bested your PC and became the superior being!";
        popLog.textContent = "You won the game, wp!";
        StartEndGame ();
    } else if (scrPl < 5 && scrPc == 5 ) {
        divOut.textContent = log + " You fought well but were no match for the procesing power of your PC!";
        popLog.textContent = "You lost the game, ha ha ha nooob!";
        StartEndGame ();
    } 
    
    console.log(scrPl)
    console.log(scrPc)
}

function StartEndGame () {
    overlay.classList.add('active');
    resetGame ();
}

function EndEndGame () {
    overlay.classList.remove('active');
    document. location. reload();
}