// Generate computer choice
function computerPlay() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}

let playerInput = 0;

function playRock() {
  playerInput = "ROCK";
  playRound();
}

function playPaper() {
  playerInput = "PAPER";
  playRound();
}

function playScissors() {
  playerInput = "SCISSORS";
  playRound();
}

function playRound() {
  computerSelection = computerPlay();

  playerSelection = playerInput;

  const message = document.querySelector("h3");

  if (playerSelection === computerSelection) {
    message.textContent = "Tie";
    return 0;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    message.textContent = "You win! Rock beats scissors!";
    return 1;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    message.textContent = "You lose! Paper beats rock!";
    return 2;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    message.textContent = "You win! Paper beats rock!";
    return 1;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    message.textContent = "You lose! Scissors beat paper!";
    return 2;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    message.textContent = "You win! Scissors beat paper!";
    return 1;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    message.textContent = "You lose! Rock beats scissors!";
    return 2;
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRock);
const paper = document.querySelector("#paper");
paper.addEventListener("click", playPaper);
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playScissors);