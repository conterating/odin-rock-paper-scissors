let winner = "";

function getComputerChoice() {
  let computer_choice = "";
  const random_number = Math.random();
  if (random_number < 1 / 3) {
    computer_choice = "rock";
  } else if (random_number >= 1 / 3 && random_number <= 2 / 3) {
    computer_choice = "paper";
  } else {
    computer_choice = "scissors";
  }
  return computer_choice;
}

function getHumanChoice() {
  let human_choice = prompt("Choose: Rock, Paper, or Scissors");
  human_choice = human_choice.toLowerCase();
  return human_choice;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function decideGameWinner() {
  if (humanSelection == "paper" && computerSelection == "rock") {
    winner = "human";
  } else if (humanSelection == "rock" && computerSelection == "scissors") {
    winner = "human";
  } else if (humanSelection == "scissors" && computerSelection == "paper") {
    winner = "human";
  } else if (humanSelection == "rock" && computerSelection == "paper") {
    winner = "computer";
  } else if (humanSelection == "scissors" && computerSelection == "rock") {
    winner = "computer";
  } else if (humanSelection == "paper" && computerSelection == "scissors") {
    winner = "computer";
  }
  return winner;
}

function playRound() {
  let humanScore = 0;
  let computerScore = 0;

  decideGameWinner();

  if (winner == "human") {
    console.log(`You won! ${humanSelection} beats ${computerSelection}.`);
    humanScore++;
  } else if (winner == "computer") {
    console.log(`You lost! ${computerSelection} beats ${humanSelection}.`);
    computerScore++;
  } else {
    console.log("Tie!!!");
  }

  console.log(humanSelection);
  console.log(computerSelection);
  console.log(humanScore);
  console.log(computerScore);
}

playRound();
