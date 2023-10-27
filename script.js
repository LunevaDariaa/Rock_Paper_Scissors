"use strict";

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

//const playerChoise = playerSelection();
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
