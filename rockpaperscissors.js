// Generate computer choice
function computerPlay() {
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}
// Ask player input
// Make player input same case as computer input
// Compare player and computer input 
// Determine winner
// Display winner
function playRound() {
  let playerInput = prompt('Rock, Paper, Scissors?')

  computerSelection = computerPlay();

  playerSelection = playerInput.toUpperCase();

  playerScore = 0

  computerScore = 0

  if (playerSelection === computerSelection) {
    console.log ('Tie');
    playerScore, computerScore;
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    console.log ('You win! Rock beats scissors!');
    ++playerScore;
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    console.log ('You lose! Paper beats rock!');
    ++computerScore;
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    console.log ('You win! Paper beats rock!');
    ++playerScore;
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    console.log ('You lose! Scissors beat paper!');
    ++computerScore;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    console.log ('You win! Scissors beat paper!');
    ++playerScore;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    console.log ('You lose! Rock beats scissors!');
    ++computerScore;
  }
  alert(`Computer score: ${computerScore}, Player score: ${playerScore}`);
}
// Keep track of score
function game() {
  for (let round = 0; round < 5; round++) {
    playRound()
  }
}