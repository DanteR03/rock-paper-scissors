const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return choice1;
    } else if (num === 1) {
        return choice2;
    } else {
        return choice3;
    }
}

function getHumanChoice () {
    let userChoice = window.prompt("Choose your move").toLowerCase();
    return (userChoice === choice1 || userChoice === choice2 || userChoice === choice3) ? userChoice : "Wrong move, friend." 
}

function playRound (humMove, compMove) {
    let move1 = humMove();
    let move2 = compMove();
    if (move1.length > move2.length) {
        humanScore++
    } else if (move1.length < move2.length) {
        computerScore++
    } else {
        console.log("It's a tie!")
    }
}
