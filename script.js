const stonePaperScissors = ["Stone", "Paper", "Scissors"];
const BtnStone = document.querySelector("#Stone");
const BtnPaper = document.querySelector("#Paper");
const BtnScissor = document.querySelector("#Scissor");

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 2.9);
};

const chooseWinner = (user, cpu) => {
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
};

const start = (userInput) => {
  const userChoice = stonePaperScissors[userInput];
  const cpuChoice = stonePaperScissors[generateRandomNumber()];
  console.log(userChoice, cpuChoice, generateRandomNumber());

  const didUserWon = chooseWinner(userChoice, cpuChoice);

  if (didUserWon) console.log("🍕");
  else if (didUserWon === null) console.log("🥓");
  else console.log("🦆");
};
