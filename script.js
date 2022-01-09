   // Napraviti funkciju koja nasumicno bira izmedju 3 ponudjena izbora (function computerPlay ())
function computerPlay (){

    // odrediti array koji sadrzi 3 razlicite vrednosti, moja prva ideja je Array sa 3 stringa koja u sebi nose imena izbora (const arr)
    const arr=['rock', 'paper', 'scissors'];

    // nakon sto se nasumicno izabere broj od 1 do 3, iz Array-a se izvlaci string koji pirpada toj vrednosti i dodeljuje se novoj promenljivoj
    let rand= arr[Math.floor(Math.random()*(arr.length+1))];     
    rand = rand.toString ();
    // console.log(rand);  // nova kreirana promenljiva sadrzi izabranu vrednost i ispisuje je u konzolu
    // console.log(typeof(rand));
    return rand;
}
// computerPlay ();
const butRok = document.getElementById('rock')
const butPap = document.getElementById('paper')
const butScs = document.getElementById('scissors')

let playerSelection = '';
function playRound (){
    let computerSelection = computerPlay ();
    // let input = prompt("Choose your weapon: ", 'Rock - Paper - Scissors');  
    // if (input === null) {
    //     alert ("So you decided to leave? Good, you didn't stand a chance against me!");
    // }  
    // playerSelection = input.toLowerCase();

    // console.log(computerSelection);
    // console.log(typeof(computerSelection));
    // console.log(playerSelection);
    // console.log(typeof(playerSelection));

    // window.addEventListener('keydown', function(e){
    //     if((e.key=='Escape'||e.key=='Esc'||e.keyCode==27) && (e.target.nodeName=='BODY')){
    //         e.preventDefault();
    //         return false;
    //     }
    // }, true);

    if ( playerSelection === '') {
        alert("You didn't choose the correct weapon!");
    } else if ( playerSelection === computerSelection ) {
        alert ("A match was struck... yet no blood was spilt...");
    } else {
        if ( playerSelection === 'rock' && computerSelection === 'scissors' ) {
            alert("Our mighty rock has crushed the opponent!");      
        } else if ( playerSelection === 'rock' && computerSelection === 'paper' ) {
            alert("Your pathetic rock was no match for the pure shape of the glories A4 sheet of paper!");
        } else if ( playerSelection === 'paper' && computerSelection === 'rock') {
            alert("Our blessed sheet of paper covered the opponents cursed rocky form and turned him into dust!");
        } else if ( playerSelection === 'paper' && computerSelection === 'scissors') {
            alert ("Your self-proclaimed paper messiah was cut down by the sharp embrace of the machine!");
        } else if ( playerSelection === 'scissors' && computerSelection === 'paper') {
            alert ("The sharpness of your embrace has cut down the false prophet of the A4 church!");
        } else if ( playerSelection === 'scissors' && computerSelection === 'rock') {
            alert ("Your so called sharp embrace was shattered by the might of the rock!");
        } else {
            alert ("Are you so bad that you can't choose your weapons correctly and lost without a fight?");
        }
    }
    console.log('  ');      // additional spcae in the consol tab
}

// playRound ();

// Funkcija ispod je namenjena za loop igre 5 puta; privremeno je gasim jer cu da pokusam da napravim igru tako da se radi koliko god puta korisnik klikce

// function game () {
//     for (let i = 1; i<=5; i++) {
//         playRound();
//         // computerPlay ();
//         // let computerSelection = computerPlay();

//     }
// }
// game ();