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
  victoryCheck();
}

function playPaper() {
  playerInput = "PAPER";
  playGame();
  victoryCheck();
}

function playScissors() {
  playerInput = "SCISSORS";
  playGame();
  victoryCheck();
}

function playGame() {
  computerSelection = computerPlay();

  computerPickImage(computerSelection);

  playerSelection = playerInput;

  playerPickImage(playerSelection);

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
}

function resetButton() {
  playerTotal = 0;
  computerTotal = 0;

  const message = document.querySelector("h3");

  const playerScore = document.querySelector("#playerScore");
  const computerScore = document.querySelector("#computerScore");

  const totalPlayerScore = document.querySelector("#playerTotal");
  const totalComputerScore = document.querySelector("#computerTotal");

  const computerPick = document.querySelector("#computerPick");
  const playerPick = document.querySelector("#playerPick");

  message.textContent = "Score 5 first to win the game";
  playerScore.textContent = "Score: 0";
  computerScore.textContent = "Score: 0";
  totalPlayerScore.textContent = "Player score: 0";
  totalComputerScore.textContent = "Computer score: 0";
  rock.addEventListener("click", playRock);
  paper.addEventListener("click", playPaper);
  scissors.addEventListener("click", playScissors);
  button.classList.add("hidden");
  computerPick.setAttribute("src", "./images/Rock.svg");
  computerPick.setAttribute("alt", "Rock");
  playerPick.setAttribute("src", "./images/Rock.svg");
  playerPick.setAttribute("alt", "Rock");
}

function computerPickImage(choice) {
  const computerPick = document.querySelector("#computerPick");
  if (choice === "ROCK") {
    computerPick.setAttribute("src", "./images/Rock.svg");
    computerPick.setAttribute("alt", "Rock");
  } else if (choice === "PAPER") {
    computerPick.setAttribute("src", "./images/Paper.svg");
    computerPick.setAttribute("alt", "Paper");
  } else if (choice === "SCISSORS") {
    computerPick.setAttribute("src", "./images/Scissors.svg");
    computerPick.setAttribute("alt", "Scissors");
  }
}

function playerPickImage(choice) {
  const playerPick = document.querySelector("#playerPick");
  if (choice === "ROCK") {
    playerPick.setAttribute("src", "./images/Rock.svg");
    playerPick.setAttribute("alt", "Rock");
  } else if (choice === "PAPER") {
    playerPick.setAttribute("src", "./images/Paper.svg");
    playerPick.setAttribute("alt", "Paper");
  } else if (choice === "SCISSORS") {
    playerPick.setAttribute("src", "./images/Scissors.svg");
    playerPick.setAttribute("alt", "Scissors");
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRock);
const paper = document.querySelector("#paper");
paper.addEventListener("click", playPaper);
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playScissors);
const button = document.querySelector("button");
button.addEventListener("click", resetButton);