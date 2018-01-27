//Linking to other needed files for Hangman game
var fs = require("fs");
var WordList = require('./wordList.js');
var Word = require('./word.js');
var inquirer = require('inquirer');

//function for game, selects a random Word from Word list
function Hangman() {
  this.Word = new Word(WordList[Math.floor(Math.random() * WordList.length)]);
  this.guesses = 15;
}
//displays message if game is running
console.log("Hangman game has started!")

//Function for when game is playing
Hangman.prototype.play = function(game) {
  var self = this;
  this.getGuess(function() {
    if(self.Word.solved()) {
      console.log(self.Word.toString());
      console.log("You win!");
      game();
    } 
    else if(self.guesses <= 0) {
      console.log("Out of guesses!");
      game();
    } else {
      self.play(game);
    }
  });
}

//Function for guesses
Hangman.prototype.getGuess = function(game) {
  var self = this;
  console.log("Guesses left: " + self.guesses);
  console.log(this.Word.toString());
  inquirer.prompt([
    {
      name: "letter",
      type: "input",
      message: "Guess a letter"
    }
  ]).then(function(answer) {
    if(answer.letter.length > 1) {
      console.log("Only one letter please!");
      return game();
    }
    self.guesses--;
    self.Word.guessLetter(answer.letter);
    game();
  });
}

//Exports Hangman function
module.exports = Hangman;