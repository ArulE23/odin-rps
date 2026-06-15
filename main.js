function getComputerChoice() {
  const choice = Math.random();
  if (choice < (1/3)) {
    return "Rock";
  } else if (choice < (2/3)) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose: ");
  const formattedChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  return formattedChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw! Computer chose ${computerChoice} as well.`);
  } else if (
    humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper"
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return "win";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return "lose";
  }
}

function playGame() {
  const hRes = document.querySelector("#h-result");
  const cRes = document.querySelector("#c-result");
  let humanScore = 0;
  let computerScore = 0;
  while (humanScore < 5 && computerScore < 5) {
    hRes.textContent = humanScore;
    cRes.textContent = computerScore;
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const round = playRound(humanChoice, computerChoice);
    switch (round) {
      case "win":
        humanScore++;
        break;
      case "lose":
        computerScore++;
        break;
      default:
        break;
    }
  }
  let winMsg;
  if (humanScore > computerScore) {
    winMsg = "Winner: Human";
  } else {
    winMsg = "Winner: Computer";
  }
  console.log(
    `${winMsg}\n` +
    `Final Score: Human - ${humanScore} | Computer - ${computerScore}`
  );
}

function goToPage(toPage) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    if (page.classList.contains(toPage)) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  })
}

///////////////////////////////////////////////

goToPage("start");

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => {
  goToPage("playing");
});

// playGame();