// Generate computer choice
let computerSelection = '';

function computerPlay() {
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}
computerSelection = computerPlay();
// Ask player input
let playerInput = prompt('Rock, Paper, Scissors?')
// Make player input same case as computer input
let playerSelection = playerInput.toUpperCase();
// Compare player and computer input 
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    return 'You win! Rock beats scissors!';
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    return 'You lose! Paper beats rock!';
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    return 'You win! Paper beats rock!';
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    return 'You lose! Scissors beat paper!';
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    return 'You win! Scissors beat paper!';
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    return 'You lose! Rock beats scissors!';
  }
}
// Determine winner
// Display winner
// Keep track of score