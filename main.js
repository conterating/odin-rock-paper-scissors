function getComputerChoice() {
  let computer_choice = "";
  let random_number = Math.random();
  if (random_number < 1 / 3) {
    computer_choice = "rock";
  } else if (random_number >= 1 / 3 && random_number <= 2 / 3) {
    computer_choice = "paper";
  } else {
    computer_choice = "scissors";
  }
  return computer_choice;
}

console.log(getComputerChoice());
