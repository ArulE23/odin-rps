let humanScore = 0;
let computerScore = 0;
const humanRes = document.querySelector("#h-result");
const computerRes = document.querySelector("#c-result");
const endRes = document.querySelector("#end-result");

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

function updateEndRes() {
  let winMsg;
  if (humanScore > computerScore) {
    winMsg = "Winner: Human";
  } else {
    winMsg = "Winner: Computer";
  }
  endRes.textContent = `${winMsg}\n` +
  `Final Score: Human - ${humanScore} | Computer - ${computerScore}`;
}

function updateCurrentRes() {
  humanRes.textContent = humanScore;
  computerRes.textContent = computerScore;
}

function playRound(event) {
  const computerChoice = getComputerChoice();
  const humanChoice = event.target.textContent;
  if (humanChoice === computerChoice) {
    console.log(`Draw! Computer chose ${computerChoice} as well.`);
  } else if (
    humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper"
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
  updateCurrentRes();
  if (humanScore == 5 || computerScore == 5) {
    updateEndRes();
    goToPage("end");
  }
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

goToPage("start");

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => {
  goToPage("playing");
});

const playerBtns = document.querySelector("#player-buttons");
playerBtns.addEventListener("click", playRound);

const playAgainBtn = document.querySelector("#play-again-btn");
playAgainBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  updateCurrentRes();
  goToPage("playing");
})