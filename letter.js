//Functions for letters corresponding to random word
function Letter(letter) {
    this.letter = letter;
    if(this.letter.match(/^[a-zA-Z]$/)) {
      this.guessed = false;
    } 
    else {
      this.guessed = true;
    }
}
//Function to compare letter guessed to letter in random word
Letter.prototype.guess = function(letter) {
    if(this.letter == letter) {
      this.guessed = true;
    }
}

//Function that generates either the letter if guess correctly or "_" if incorrectly
Letter.prototype.toString = function() {
    if(this.guessed) {
      return this.letter;
    } 
    else {
      return "_";
    }
}
  
  module.exports = Letter;