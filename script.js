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

// compare two inputs

//const computerChoise = getComputerChoise();
const playerChoise = playerSelection();
const playRound = function (playerChoise, computerChoise) {
  const lose = `You lose! ${computerChoise} beats ${playerChoise}!`;
  const won = `You won! ${playerChoise} beats ${computerChoise}!`;
  //console.log(playerChoise);
  //console.log(computerChoise);
  while (
    playerChoise === "paper" ||
    playerChoise === "rock" ||
    playerChoise === "scissors"
  ) {
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
// if there is rock and scissor => rock wins
// if rock and paper => paper wins
// if paper and scissors => scissor wins
// decide who win this round- user or computer
// plus one point to one, who won
const game = function () {
  for (let i = 0; i < 5; i++) {
    playerSelection(); // Get user's choice
    const computerChoise = choise[Math.floor(Math.random() * choise.length)]; // Get a random computer choice
    console.log(playRound(playerChoise, computerChoise));
    if (playerChoise === computerChoise) {
      i--;
    }
  }
  if (computerScore > playerScore) {
    console.log("Computer won that game");
    console.log(playerScore);
    console.log(computerScore);
  } else {
    console.log("Congratulations! You won that game!");
    console.log(playerScore);
    console.log(computerScore);
  }
};

game();
