// Generate computer choice
let playerTotal = 0;
let computerTotal = 0;

function computerPlay() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}

function playRock() {
  playerInput = "ROCK";
  playGame();
}

function playPaper() {
  playerInput = "PAPER";
  playGame();
}

function playScissors() {
  playerInput = "SCISSORS";
  playGame();
}

function playRound() {
  computerSelection = computerPlay();

  playerSelection = playerInput;

  const message = document.querySelector("h3");

  let score = 0;

  const playerScore = document.querySelector("#playerScore");
  const computerScore = document.querySelector("#computerScore");

  const totalPlayerScore = document.querySelector("#playerTotal");
  const totalComputerScore = document.querySelector("#computerTotal");

  if (playerSelection === computerSelection) {
    message.textContent = "Tie";
    score = 0;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    message.textContent = "You win! Rock beats scissors!";
    score = 1;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    message.textContent = "You lose! Paper beats rock!";
    score = 2;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    message.textContent = "You win! Paper beats rock!";
    score = 1;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    message.textContent = "You lose! Scissors beat paper!";
    score = 2;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    message.textContent = "You win! Scissors beat paper!";
    score = 1;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    message.textContent = "You lose! Rock beats scissors!";
    score = 2;
  }

  if (score === 1) {
    playerScore.textContent = "Score: 1";
    computerScore.textContent = "Score: 0";
    playerTotal = ++playerTotal;
    totalPlayerScore.textContent = `Player score: ${playerTotal}`;
  } else if (score === 2) {
    computerScore.textContent = "Score: 1";
    playerScore.textContent = "Score: 0";
    computerTotal = ++computerTotal;
    totalComputerScore.textContent = `Computer score: ${computerTotal}`;
  } else {
    playerScore.textContent = "Score: 0";
    computerScore.textContent = "Score: 0";
  }
}

function victoryCheck() {
  if (playerTotal === 5) {
    const message = document.querySelector("h3");
    message.textContent = "Victory! Congratulations!"
    rock.removeEventListener('click', playRock);
    paper.removeEventListener('click', playPaper);
    scissors.removeEventListener('click', playScissors);
    button.classList.remove("hidden");
  } else if (computerTotal === 5) {
    const message = document.querySelector("h3");
    message.textContent = "Defeat! Better luck next time!"
    rock.removeEventListener('click', playRock);
    paper.removeEventListener('click', playPaper);
    scissors.removeEventListener('click', playScissors);
    button.classList.remove("hidden");
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRock);
const paper = document.querySelector("#paper");
paper.addEventListener("click", playPaper);
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playScissors);
const button = document.querySelector("button")