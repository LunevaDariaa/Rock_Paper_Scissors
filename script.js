"use strict";
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btn = document.querySelectorAll("button");

const imgUser = document.querySelector(".img_user");
const imgComp = document.querySelector(".img_comp");

const userScr = document.querySelector(".user_score");
const compScr = document.querySelector(".comp_score");
const infoDisplay = document.querySelector(".info_display");
const choise = ["rock", "paper", "scissors"];

const popUp = document.querySelector(".popup");
const overLay = document.querySelector(".overlay");
const winner = document.querySelector(".winner");
const againBtn = document.querySelector(".btn_close");
let playerScore = 0;
let computerScore = 0;

// Compute computer input
let computerChoise;
const compSelection = function (array) {
  computerChoise = choise[Math.floor(Math.random() * choise.length)]; // Get a random computer choice
  imgComp.src = `photo/${computerChoise}.png`;
  imgComp.classList.remove("hide");
  return computerChoise;
};

//Show popup
const showModal = function () {
  if (playerScore >= 5) {
    popUp.classList.remove("hide");
    overLay.classList.remove("hide");
    winner.textContent = "You won this game!";
  } else if (computerScore >= 5) {
    popUp.classList.remove("hide");
    overLay.classList.remove("hide");
    winner.textContent = "Gosh, you lost :(";
  }
};

const playAgain = function () {
  againBtn.addEventListener("click", function () {
    popUp.classList.add("hide");
    overLay.classList.add("hide");
    playerScore = 0;
    computerScore = 0;
    imgUser.classList.add("hide");
    imgComp.classList.add("hide");
    userScr.innerHTML = 0;
    compScr.innerHTML = 0;
    infoDisplay.innerHTML = "";
  });
};
//Running game
btn.forEach((button) => {
  button.addEventListener("click", function () {
    if (button == rock) {
      imgUser.classList.remove("hide");
      imgUser.src = `photo/rock.png`;
    } else if (button == paper) {
      imgUser.classList.remove("hide");
      imgUser.src = `photo/paper.png`;
    } else if (button == scissors) {
      imgUser.classList.remove("hide");
      imgUser.src = `photo/scissors.png`;
    }
    console.log(compSelection(choise));
    playRound(button.id, computerChoise);
    userScr.textContent = playerScore;
    compScr.textContent = computerScore;
    showModal();
    playAgain();
  });
});

//Game rules plus score couter
const playRound = function (buttonId, computerChoise) {
  const lose = `You lose! ${computerChoise} beats ${buttonId}!`;
  const won = `You won! ${buttonId} beats ${computerChoise}!`;
  //whet input right - game will start

  if (buttonId === "paper" && computerChoise === "rock") {
    playerScore++;
    infoDisplay.textContent = won;
  } else if (buttonId === "paper" && computerChoise === "scissors") {
    computerScore++;
    infoDisplay.textContent = lose;
  } else if (buttonId === "scissors" && computerChoise === "paper") {
    playerScore++;
    infoDisplay.textContent = won;
  } else if (buttonId === "scissors" && computerChoise === "rock") {
    computerScore++;
    infoDisplay.textContent = lose;
  } else if (buttonId === "rock" && computerChoise === "scissors") {
    playerScore++;
    infoDisplay.textContent = won;
  } else if (buttonId === "rock" && computerChoise === "paper") {
    computerScore++;
    infoDisplay.textContent = lose;
  } else if (buttonId === computerChoise) {
    infoDisplay.textContent = `Try again! You both choose ${buttonId}`;
  }
};
