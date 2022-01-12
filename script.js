const bod = document.getElementById('bod');
const butDiv = document.getElementById('butDiv');
const butRok = document.getElementById('rock');
const butPap = document.getElementById('paper');
const butScs = document.getElementById('scissors');

butRok.addEventListener('click', playRound);
butPap.addEventListener('click', playRound);
butScs.addEventListener('click', playRound);

let scrPl=0;
let scrPc=0;

let pointPl = 0;
let pointPc = 0;

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
    
    if (playerSelection === computerSelection) {
        alert ("A match was struck... yet no blood was spilt...");
    } else if (
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            pointPl = 1;
            scrPl += pointPl;
    } else if (
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ){
            pointPc = 1;
            scrPc += pointPc;
        }

    console.log(scrPl)
    console.log(scrPc)
    return scrPl && scrPc;
}

const rezDiv = document.createElement('div');   
const parResTit = document.createElement('p');

const text = document.createTextNode("Rezultat: " + scrPl + " - " + scrPc);
parResTit.appendChild(text);
rezDiv.appendChild(parResTit);


bod.appendChild(rezDiv);



// Funkcija ispod je namenjena za loop igre 5 puta; privremeno je gasim jer cu da pokusam da napravim igru tako da se radi koliko god puta korisnik klikce

// function game () {
//     for (let i = 1; i<=5; i++) {
//         playRound();
//         // computerPlay ();
//         // let computerSelection = computerPlay();

//     }
// }
// game ();