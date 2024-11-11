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

const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");
const playerMoveElement = document.querySelector("#player-move");
const computerMoveElement = document.querySelector("#computer-move");
const resultElement = document.querySelector("#result");

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

function playRound (move1) {
    let move2 = getComputerChoice();
    if (move1 === move2) {
        resultElement.textContent = "It's a tie!";
    } else if (move1 === "rock") {
        if (move2 === "paper") {
            computerScore++
            resultElement.textContent = "Computer won!";
        } else {
            humanScore++
            resultElement.textContent = "Player won!";
        }
    } else if (move1 === "paper") {
        if (move2 === "scissors") {
            computerScore++
            resultElement.textContent = "Computer won!";
        } else {
            humanScore++
            resultElement.textContent = "Player won!";
        }
    } else if (move1 === "scissors") {
        if (move2 === "rock") {
            computerScore++
            resultElement.textContent = "Computer won!";
        } else {
            humanScore++
            resultElement.textContent = "Player won!";
        };
    };
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
    playerMoveElement.textContent = `Player move: ${move1}`
    computerMoveElement.textContent = `Computer move: ${move2}`;
};
