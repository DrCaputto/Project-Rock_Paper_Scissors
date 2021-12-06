   // Napraviti funkciju koja nasumicno bira izmedju 3 ponudjena izbora (function computerPlay ())
function computerPlay (){

    // odrediti objekat koji sadrzi 3 razlicite vrednosti, moja prva ideja je Array sa 3 stringa koja u sebi nose    imena izbora (let arr)
    const arr=['rock', 'paper', 'scissors'];

    // nakon sto se nasumicno izabere broj od 1 do 3, iz Array-a se izvlaci string koji pirpada toj vrednosti i dodeljuje se novoj promenljivoj
    let rand= arr[Math.floor(Math.random()*arr.length)];     
    rand = rand.toString ();
    // console.log(rand);  // nova kreirana promenljiva sadrzi izabranu vrednost i ispisuje je u konzolu
    // console.log(typeof(rand));
    return rand;
}
// computerPlay ();

let playerSelection = 'rock';
let computerSelection = computerPlay();

function playRound (){
    let input = prompt("Chose your weapon: ", 'Rock - Paper - Scissorss');    
    playerSelection = input.toLowerCase();

    console.log(computerSelection);
    console.log(typeof(computerSelection));
    console.log(playerSelection);
    console.log(typeof(playerSelection));

    if ( playerSelection === '') {
        alert("You didn't chose the correct weapon!");
    } else if ( playerSelection === computerSelection ) {
        alert ("A match was struck... yet no blood was spilt...");
    } else {
        if ( playerSelection==='rock' && computerSelection === 'scissors' ) {
            alert("Our mighty rock has crushed the oponent!");      
        } else if ( playerSelection === 'rock' && computerSelection === 'paper' ) {
            alert("Your pathetic rock was no match for the pure shape of the glories A4 sheet of paper!");
        } else if ( playerSelection === 'paper' && computerSelection === 'rock') {
            alert("Our blessed sheet of paper covered the opponents curesed rocky form and turned him into dust!");
        } else if ( playerSelection === 'paper' && computerSelection === 'scissors') {
            alert ("Your self-proclaimed paper mesia was cut down by the sharp embrace of the machine!");
        } else if ( playerSelection === 'scissors' && computerSelection === 'paper') {
            alert ("The sharpnes of our embrace has cut down the false prophet of the A4 church!");
        } else if ( playerSelection === 'scissors' && computerSelection === 'rock') {
            alert ("Your so called sharp embrace was shatterd by the might of the rock!");
        }
    }
    // console.log(playRound());
}

playRound ();