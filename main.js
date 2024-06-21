// random computer choice to make the game more realistic
function getComputerChoice() {
  let computerChoice;
  const randomNumber = Math.random().toFixed(2);
  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  const container = document.querySelector(".container");
  let humanChoice;

  container.addEventListener("click", (e) => {
    humanChoice = e.target.textContent;
    playRound(humanChoice, getComputerChoice());
  });
}

function playRound(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;
  const div = document.createElement("div");
  const body = document.body;
  //humanChoice = computerChoice -> tie
  if (humanChoice == computerChoice) {
    div.textContent = `It's a tie! You both chose ${humanChoice}`;
  }
  //human win scenarios
  else if (
    (humanChoice == "Rock" && computerChoice == "Scissors") ||
    (humanChoice == "Paper" && computerChoice == "Rock") ||
    (humanChoice == "Scissors" && computerChoice == "Paper")
  ) {
    div.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
  } else {
    div.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`;
  }
  body.append(div);
}

function playGame() {
  getHumanChoice();
}

playGame();
