// Generate computer choice
function computerPlay() {
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}
// Ask player input
let playerInput = prompt('Rock, Paper, Scissors?')
// Make player input same case as computer input
// Compare player and computer input 
// Determine winner
// Display winner
function playRound() {
  computerSelection = computerPlay();

  playerSelection = playerInput.toUpperCase();

  if (playerSelection === computerSelection) {
    console.log ('Tie');
    return 0;
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    console.log ('You win! Rock beats scissors!');
    return 1;
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    console.log ('You lose! Paper beats rock!');
    return 2;
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    console.log ('You win! Paper beats rock!');
    return 1;
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    console.log ('You lose! Scissors beat paper!');
    return 2;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    console.log ('You win! Scissors beat paper!');
    return 1;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    console.log ('You lose! Rock beats scissors!');
    return 2;
  }
}
// Keep track of score
// Make game repeat until someone wins