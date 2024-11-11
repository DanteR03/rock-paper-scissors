const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    })
});

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
    if (userChoice === choice1 || userChoice === choice2 || userChoice === choice3) {
        return userChoice;
    }
}


function playRound (move1) {
    let move2 = getComputerChoice();
    console.log(move1, move2, humanScore, computerScore);
    if (move1 === move2) {
        console.log("It's a tie!");
    } else if (move1 === "rock") {
        if (move2 === "paper") {
            computerScore++
            console.log("Computer won!");
        } else {
            humanScore++
            console.log("Player won!");
        }
    } else if (move1 === "paper") {
        if (move2 === "scissors") {
            computerScore++
            console.log("Computer won!");
        } else {
            humanScore++
            console.log("Player won!");
        }
    } else if (move1 === "scissors") {
        if (move2 === "rock") {
            computerScore++
            console.log("Computer won!");
        } else {
            humanScore++
            console.log("Player won!");
        };
    };
};
