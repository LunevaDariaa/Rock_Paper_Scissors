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
  });
});

const playRound = function (buttonId, computerChoise) {
  const lose = `You lose! ${computerChoise} beats ${buttonId}!`;
  const won = `You won! ${buttonId} beats ${computerChoise}!`;
  //whet input right - game will start

  if (buttonId === "paper" && computerChoise === "rock") {
    playerScore++;
    infoDisplay.textContent = won;
  } else if (buttonId === "paper" && computerChoise === "scissors") {
    computerScore++;
    infoDisplay.textContent = won;
  } else if (buttonId === "scissors" && computerChoise === "paper") {
    playerScore++;
    return won;
  } else if (buttonId === "scissors" && computerChoise === "rock") {
    computerScore++;
    infoDisplay.textContent = won;
  } else if (buttonId === "rock" && computerChoise === "scissors") {
    playerScore++;
    return won;
  } else if (buttonId === "rock" && computerChoise === "paper") {
    computerScore++;
    infoDisplay.textContent = won;
  } else if (buttonId === computerChoise) {
    infoDisplay.textContent = `Try again! You both choose ${buttonId}`;
  }
};

// console.log(playerScore);
// console.log(computerScore);
/*
// create rock, scissor and paper
const choise = ["rock", "paper", "scissors"];
// take user's input- one of them
const playerSelection = function () {
  const input = prompt("Choose among Paper, Scissors and Rock");
  const inputLowerCase = input.toLowerCase();
  if (
    inputLowerCase === "rock" ||
    inputLowerCase === "scissors" ||
    inputLowerCase === "paper"
  ) {
    return inputLowerCase;
  } else {
    console.log(
      "Please, correct your answer. Only Paper, Scissors or Rock can play"
    );
  }
};

// Compute computer input
let computerChoise;
const compSelection = function (array) {
  computerChoise = choise[Math.floor(Math.random() * choise.length)]; // Get a random computer choice
  return computerChoise;
};

// compare two inputs
const playRound = function (playerChoise, computerChoise) {
  const lose = `You lose! ${computerChoise} beats ${playerChoise}!`;
  const won = `You won! ${playerChoise} beats ${computerChoise}!`;
  //whet input right - game will start
  while (
    playerChoise === "paper" ||
    playerChoise === "rock" ||
    playerChoise === "scissors"
  ) {
    //The rules of the game
    if (playerChoise === "paper" && computerChoise === "rock") {
      playerScore++;
      return won;
    } else if (playerChoise === "paper" && computerChoise === "scissors") {
      computerScore++;
      return lose;
    } else if (playerChoise === "scissors" && computerChoise === "paper") {
      playerScore++;
      return won;
    } else if (playerChoise === "scissors" && computerChoise === "rock") {
      computerScore++;
      return lose;
    } else if (playerChoise === "rock" && computerChoise === "scissors") {
      playerScore++;
      return won;
    } else if (playerChoise === "rock" && computerChoise === "paper") {
      computerScore++;
      return lose;
    } else if (playerChoise === computerChoise) {
      return `Try again! You both choose ${playerChoise}`;
    }
  }
};
let playerScore = 0;
let computerScore = 0;

const game = function () {
  for (let i = 0; i < 5; i++) {
    const playerChoise = playerSelection(); // Get user's choice
    compSelection(choise);
    console.log(playRound(playerChoise, computerChoise));
    if (playerChoise === computerChoise) {
      i--;
    }
  }
  // Calculate final points and display who win the game
  if (computerScore > playerScore) {
    console.log("Computer won that game");
    console.log(`Your score: ${playerScore}`);
    console.log(`Your score: ${computerScore}`);
  } else {
    console.log("Congratulations! You won that game!");
    console.log(`Your score: ${playerScore}`);
    console.log(`Your score: ${computerScore}`);
  }
};

game();
*/
