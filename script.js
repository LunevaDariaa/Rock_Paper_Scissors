"use strict";

// create rock, scissor and paper
const choise = ["rock", "paper", "scissor"];
// take user's input- one of them
const playerSelection = function () {
  const input = prompt("Choose among Paper, Scissors and Rock");
  const inputLowerCase = input.toLowerCase();
  if (
    inputLowerCase === "rock" ||
    inputLowerCase === "scissors" ||
    inputLowerCase === "paper"
  ) {
    console.log(inputLowerCase);
  } else {
    console.log(
      "Please, correct your answer. Only Paper, Scissors or Rock can play"
    );
  }
};
playerSelection();
// compute random choise of computer
const getComputedChoise = function () {
  console.log(choise[Math.floor(Math.random() * choise.length)]);
};
getComputedChoise();
// compare two inputs
// if there is rock and scissor => rock wins
// if rock and paper => paper wins
// if paper and scissors => scissor wins
// decide who win this round- user or computer
// plus one point to one, who won
