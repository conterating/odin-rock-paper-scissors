let humanScore = 0;
let computerScore = 0;

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
    gameFinished();
  });
}

function playRound(humanChoice, computerChoice) {
  const div = document.querySelector(".winner-round");
  let roundWinner;

  //humanChoice = computerChoice -> tie
  if (humanChoice == computerChoice) {
    div.textContent = `It's a tie! You both chose ${humanChoice}`;
    roundWinner = "tie";
  }
  //human win scenarios
  else if (
    (humanChoice == "Rock" && computerChoice == "Scissors") ||
    (humanChoice == "Paper" && computerChoice == "Rock") ||
    (humanChoice == "Scissors" && computerChoice == "Paper")
  ) {
    div.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
    roundWinner = "human";
    humanScore++;
  } else {
    div.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`;
    roundWinner = "computer";
    computerScore++;
  }
  document.body.appendChild(div);
}

function clearBox(elementClass) {
  document.querySelector(elementClass).innerHTML = "";
}

function gameFinished() {
  if (humanScore === 5 || computerScore === 5) {
    gameOver();
    return true;
  } else {
    return false;
  }
}

function gameOver() {
  let winnerMessage = document.querySelector(".winner-message");
  switch (true) {
    case humanScore === 5:
      winnerMessage.textContent = "You Won!!!!";
      break;
    case computerScore === 5:
      winnerMessage.textContent = "Computer Won... :(";
      break;
  }
  document.body.append(winnerMessage);
}

function playGame() {
  getHumanChoice();
}

playGame();
