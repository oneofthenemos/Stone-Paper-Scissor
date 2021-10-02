const stonePaperScissors = ["Stone", "Paper", "Scissors"];
const BtnStone = document.querySelector("#Stone");
const BtnPaper = document.querySelector("#Paper");
const BtnScissor = document.querySelector("#Scissor");

function start(userInput) {
  const userChoice = stonePaperScissors[userInput];
  const cpuChoice = stonePaperScissors[generateRandomNumber()];
  console.log(userChoice, cpuChoice);
  displaySelection(userChoice, cpuChoice);

  const didUserWon = chooseWinner(userChoice, cpuChoice);

  let winner;
  if (didUserWon) winner = "You";
  else if (didUserWon === null) winner = null;
  else winner = "AI";
  displayWinner(winner);
}

function displaySelection(userSelection, cpuSelection) {
  console.log(userSelection, cpuSelection);
  const user = document.querySelector("#userSelection");
  const cpu = document.querySelector("#cpuSelection");

  user.innerHTML = userSelection;
  cpu.innerHTML = cpuSelection;
}

function displayWinner(winner) {
  const winnerText = document.querySelector("#result-text");

  if (winner) winnerText.innerHTML = `${winner} Won!!`;
  else winnerText.innerHTML = "It's a Tie 😶";
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 2.9);
}

function chooseWinner(user, cpu) {
  if (user == cpu) return null;
  else if (user === "Stone") {
    if (cpu === "Scissors") {
      return true;
    } else {
      return false;
    }
  } else if (user === "Paper") {
    if ((cpu = "Stone")) {
      return true;
    } else {
      return false;
    }
  } else {
    if (cpu === "Paper") {
      return true;
    } else {
      return false;
    }
  }
}
