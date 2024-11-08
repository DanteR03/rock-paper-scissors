function getComputerChoice () {
    const choice1 = "rock";
    const choice2 = "paper";
    const choice3 = "scissors";
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return choice1;
    } else if (num === 1) {
        return choice2;
    } else {
        return choice3;
    }
}