function getComputerChoice(max){
    const choices = ["rock", "paper", "scissors" ];
    const randomNum = Math.floor(Math.random() * max);

    return choices[randomNum]
}

console.log(getComputerChoice(3))

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    console.log(playerChoice)
    console.log(computerSelection)
    if (playerChoice === computerSelection) {
        return "It is draw, no one win"
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!"
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper!"
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!"
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!"
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!"
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!"
    } else {
        return "Can not choose winner"
    }
  }

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let playerChoice = null;
    let computerChoice = null;

    for (i = 0; i < 5; i++) {
        playerChoice = prompt("Write rock, paper or scissors", "rock");
        computerChoice = getComputerChoice(3);
        console.log(playRound(playerChoice, computerChoice))
    }
}

game();