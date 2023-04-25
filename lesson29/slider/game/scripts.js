const player0Field = document.querySelector(".player-0");
const player1Field = document.querySelector(".player-1");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");
const current0 = document.getElementById("current-score-0");
const current1= document.getElementById("current-score-1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new")
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-ud");

let totalScores, currentScore

const initState = () => {
    totalScores = [0, 0]; // общие очки 0-первый, 1-второй
    currentScore = 0;
    mainscore1, mainscore2 = 0;
    activePlayer = 0 // 

    score0.innerHTML = 0;
    score1.innerHTML = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;

    dice.classList.add("hidden");
}

btnRoll.onclick = function() {
    let random_numbers = Math.trunc(Math.random() * 6) + 1
    dice.src=`img/dice-${random_numbers}.png`;
    dice.classList.remove("hidden");
    if (random_numbers != 1)  {
        currentScore = currentScore + random_numbers;
        if (activePlayer == 0) {
            current0.innerHTML = currentScore
        } else {
            current1.innerHTML = currentScore
        }
        
    } else {
        player();
    }

}

function state() {
    btnHold.onclick = function() {
        if (activePlayer == 0) {
            let schet1 = 0;
            score0.innerHTML = schet1 + currentScore
            player()
            // if (random_numbers = 1) {
            //     score0.innerHTML = 0
            //     current0.innerHTML = 0
            // } 
        } else {
            console.log("Ы")
            let schet2 = 0;
            score1.innerHTML = schet2 + currentScore
            console.log("one:", mainscore2 + currentScore)
            console.log("two:", score1)
            player()
            // if (random_numbers = 1) {
            //     score1.innerHTML = 0;
            //     current.innerHTML = 0;
            // }
        }
    }
 
}


function player() {
    mainscore1 = 0;
    mainscore2 = 0;
    // если равно 1 -> 0, иначе -> 1 
    if (activePlayer == 0) {
        current0.innerHTML = 0;
        currentScore = 0
    } else {
        current1.innerHTML = 0;
        currentScore = 0;
    }
    // переключение, если есть или нет
    player0Field.classList.toggle("active");
    player1Field.classList.toggle("active"); 
    activePlayer = activePlayer == 1 ? 0 : 1
}

initState();
state();
player();