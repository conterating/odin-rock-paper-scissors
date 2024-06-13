//randomly selects a choice for the computer
function getComputerChoice() {
  let computerChoice = "";
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

//prompts user for choice and converts to lowercase
function getHumanChoice() {
  let humanInput = prompt("Rock, Paper, or Scissors?");
  return humanInput.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let humanSelection;
  let computerSelection;
  function playRound(humanChoice, computerChoice) {
    //all the scenarios for who wins the round
    //human win scenarios
    if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
    //computer win scenarios
    else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
    //tie
    else if (computerChoice === humanChoice) {
      console.log("Tie!!!!");
    }
  }
  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(
      `You win!!! Your score: ${humanScore} > Computer Score:${computerScore}!`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lost... Your score:${humanScore} < ComputerScore: ${computerScore}!`
    );
  }
}

playGame();
