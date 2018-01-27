//Linking to other needed files for Hangman game
var inquirer = require("inquirer");
var Hangman = require("./game.js");

//Function that runs game
function playGame() {
  var hangman = new Hangman();
  hangman.play(function() {
    //Prompts user to answer if they want to play again
    inquirer.prompt([
      {
        name: "playAgain",
        type: "confirm",
        message: "Do you want to play again?"
      }
    ]).then(function(answer) {
      if(answer.playAgain) {
        playGame();
      }
    });
  });
}

//Runs the function
playGame();