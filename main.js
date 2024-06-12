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
}

function decideGameWinner(humanChoice, computerChoice) {
  if (humanChoice == "paper" && computerChoice == "rock") {
    return `You won! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    return `You won! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return `You won! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    return `You lost! ${computerChoice} beats ${humanChoice}.`;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    return `You lost! ${computerChoice} beats ${humanChoice}`;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return `You lost ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame(humanChoice, computerChoice) {}
