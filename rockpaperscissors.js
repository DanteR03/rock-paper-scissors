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
// Determine winner
// Display winner
// Keep track of score