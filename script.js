const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";

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

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    function playRound () {
        let move1 = getHumanChoice();
        let move2 = getComputerChoice();
        if (move1.length > move2.length) {
            humanScore++
            console.log("Player wins this round!");
        } else if (move1.length < move2.length) {
            computerScore++
            console.log("Computer wins this round!");
        } else {
            console.log("It's a tie!");
        }
    }
    playRound ()
    playRound ()
    playRound ()
    playRound ()
    playRound ()

    if (humanScore > computerScore) {
        console.log("Player wins!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins!")
    } else {
        console.log("The game is tied! Nobody wins!");
    }
}