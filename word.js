//Linking to files needed
var Letter = require('./letter');

//Constructor for the random Word
function Word(word) {
  this.word = word;
  this.letters = [];
  for(var i = 0; i < word.length; i++) {
    this.letters.push(new Letter(word.charAt(i)));
  }
}

//Function with loop that goes through letters 
Word.prototype.guessLetter = function(letter) {
  for(var i = 0; i < this.letters.length; i++) {
    this.letters[i].guess(letter);
  }
}

//Function that converts word from array into a string
Word.prototype.toString = function() {
  var result = [];
  for(var i = 0; i < this.letters.length; i++) {
    result.push(this.letters[i].toString());
  }
  return result.join(' ');
}

//Function for word solved
Word.prototype.solved = function() {
  var solved = true;
  for(var i = 0; i < this.letters.length; i++) {
    solved = solved && this.letters[i].guessed;
  }

  return solved;
}

module.exports = Word;