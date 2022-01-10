   // Napraviti funkciju koja nasumicno bira izmedju 3 ponudjena izbora (function computerPlay ())
function computerPlay (){

    // odrediti array koji sadrzi 3 razlicite vrednosti, moja prva ideja je Array sa 3 stringa koja u sebi nose imena izbora (const arr)
    const arr=['rock', 'paper', 'scissors'];

    // nakon sto se nasumicno izabere broj od 1 do 3, iz Array-a se izvlaci string koji pirpada toj vrednosti i dodeljuje se novoj promenljivoj
    let rand= arr[Math.floor(Math.random()*(arr.length))];     
    rand = rand.toString ();
    console.log(rand);  // nova kreirana promenljiva sadrzi izabranu vrednost i ispisuje je u konzolu
    console.log(typeof(rand));
    return rand;
}

const butRok = document.getElementById('rock');
const butPap = document.getElementById('paper');
const butScs = document.getElementById('scissors');

const divRez = document.createElement('div');

// body.appendChild(divRez);    

butRok.addEventListener('click', playRound);
butPap.addEventListener('click', playRound);
butScs.addEventListener('click', playRound);

// butRok.onclick = () => {
//     let computerSelection = computerPlay ();
//     if (computerSelection === 'rock') {
//         alert ("A match was struck... yet no blood was spilt...");
//     } else if (computerSelection === 'paper') {
//         alert("Your pathetic rock was no match for the pure shape of the glories A4 sheet of paper!");
//     } else if (computerSelection === 'scissors'){
//         alert("Our mighty rock has crushed the opponent!");
//     }
// }

// butPap.onclick = () => {
//     let computerSelection = computerPlay ();
//     if (computerSelection === 'paper') {
//         alert ("A match was struck... yet no blood was spilt..."); 
//     } else if (computerSelection === 'rock') {
//         alert("Our blessed sheet of paper covered the opponents cursed rocky form and turned him into dust!");
//     } else if (computerSelection === 'scissors') {
//         alert ("Your self-proclaimed paper messiah was cut down by the sharp embrace of the machine!");
//     }
// }

// butScs.onclick = () => {
//     let computerSelection = computerPlay ();
//     if (computerSelection === 'scissors') {
//         alert ("A match was struck... yet no blood was spilt...");  
//     } else if (computerSelection === 'rock') {
//         alert ("Your so called sharp embrace was shattered by the might of the ancestral rock!");
//     } else if (computerSelection === 'paper') {
//         alert ("The sharpness of your embrace has cut down the false prophet of the A4 church!");
//     }
// }



function playRound (){
    let computerSelection = computerPlay ();

    if ((butRok.onclick || butPap.onclick || butScs.onclick) === computerSelection) {
        alert ("A match was struck... yet no blood was spilt...");
    } else if (butPap.onclick && computerSelection === 'rock') {
        alert("Our blessed sheet of paper covered the opponents cursed rocky form and turned him into dust!");
    } else if (butPap.onclick && computerSelection === 'scissors') {
        alert ("Your self-proclaimed paper messiah was cut down by the sharp embrace of the machine!");
    } else if (butRok.onclick && computerSelection === 'scissors') {
        alert("Our mighty rock has crushed the opponent!");
    } else if (butRok.onclick && computerSelection === 'paper') {
        alert("Your pathetic rock was no match for the pure shape of the glories A4 sheet of paper!");
    } else if (butScs.onclick && computerSelection === 'rock') {
        alert ("Your so called sharp embrace was shattered by the might of the ancestral rock!");
    } else if (butScs.onclick && computerSelection === 'paper') {
        alert ("The sharpness of your embrace has cut down the false prophet of the A4 church!");
    }
 }



//     // let input = prompt("Choose your weapon: ", 'Rock - Paper - Scissors');  
//     // if (input === null) {
//     //     alert ("So you decided to leave? Good, you didn't stand a chance against me!");
//     // }  
//     // playerSelection = input.toLowerCase();

//     console.log(computerSelection);
//     console.log(typeof(computerSelection));
//     console.log(butRok);
//     console.log(typeof(butRok));



    // window.addEventListener('keydown', function(e){
    //     if((e.key=='Escape'||e.key=='Esc'||e.keyCode==27) && (e.target.nodeName=='BODY')){
    //         e.preventDefault();
    //         return false;
    //     }
    // }, true);



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