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
// Keep track of score