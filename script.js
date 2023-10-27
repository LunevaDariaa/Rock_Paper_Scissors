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
//playerChoise();

// compute random choise of computer
const getComputerChoise = function () {
  return choise[Math.floor(Math.random() * choise.length)];
};
//getComputerChoise();

// compare two inputs

const computerChoise = getComputerChoise();
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
      return won;
    } else if (playerChoise === "paper" && computerChoise === "scissors") {
      return lose;
    } else if (playerChoise === "scissors" && computerChoise === "paper") {
      return won;
    } else if (playerChoise === "scissors" && computerChoise === "rock") {
      return lose;
    } else if (playerChoise === "rock" && computerChoise === "scissors") {
      return won;
    } else if (playerChoise === "rock" && computerChoise === "paper") {
      return lose;
    } else if (playerChoise === computerChoise) {
      return `Try again! You both choose ${playerChoise}`;
    }
  }
};
console.log(playRound(playerChoise, computerChoise));
// if there is rock and scissor => rock wins
// if rock and paper => paper wins
// if paper and scissors => scissor wins
// decide who win this round- user or computer
// plus one point to one, who won
