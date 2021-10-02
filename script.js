const stonePaperScissors = ["Stone", "Paper", "Scissors"];
const BtnStone = document.querySelector("#Stone");
const BtnPaper = document.querySelector("#Paper");
const BtnScissor = document.querySelector("#Scissor");
const userHand = document.querySelector("#userSelect");
const cpuHand = document.querySelector("#cpuSelect");
const user = document.querySelector("#userSelection");
const cpu = document.querySelector("#cpuSelection");
const btns = document.querySelectorAll(".btn-play");

function generateRandomNumber() {
  return Math.floor(Math.random() * 2.9);
}

function start(userInput) {
  disableBtns();
  const userChoice = stonePaperScissors[userInput];
  const cpuChoice = stonePaperScissors[generateRandomNumber()];
  console.log(userChoice, cpuChoice);
  displaySelection(userChoice, cpuChoice);

  const didUserWon = chooseWinner(userChoice, cpuChoice);
}

function displaySelection(userSelection, cpuSelection) {
  console.log(userSelection, cpuSelection);

  userHand.innerHTML = "✊";
  cpuHand.innerHTML = "✊";
  userHand.classList.add("animateFistOne");
  cpuHand.classList.add("animateFistTwo");

  user.innerHTML = userSelection;
  cpu.innerHTML = cpuSelection;
  setTimeout(() => {
    changeUserHandGestures(userSelection, cpuSelection);
    const didUserWon = chooseWinner(userSelection, cpuSelection);
    if (didUserWon) displayWinner("You");
    else if (didUserWon === null) displayWinner(null);
    else displayWinner("AI");

    userHand.classList.remove("animateFistOne");
    cpuHand.classList.remove("animateFistTwo");
    enableBtns();
  }, 2000);
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

function displayWinner(winner) {
  const winnerText = document.querySelector("#result-text");

  if (winner) winnerText.innerHTML = `${winner} Won!!`;
  else winnerText.innerHTML = "It's a Tie 😶";
}

function changeUserHandGestures(x, y) {
  console.log(x, y);
  switch (x) {
    case "Scissors":
      userHand.innerHTML = "🖖";
      break;
    case "Paper":
      userHand.innerHTML = "✋";
      break;
  }
  switch (y) {
    case "Scissors":
      cpuHand.innerHTML = "🖖";
      break;
    case "Paper":
      cpuHand.innerHTML = "✋";
      break;
  }
}

function disableBtns() {
  btns.forEach((btn) => {
    btn.setAttribute("disabled", true);
  });
}

function enableBtns() {
  btns.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
}
