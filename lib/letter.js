function Letter(letter) {
  this.letter = letter;
  if(this.letter.match(/^[a-zA-Z]$/)) {
    this.guessed = false;
  } else {
    this.guessed = true; //players don't have to guess symbols
  }
}

Letter.prototype.guess = function(letter) {
  if(this.letter == letter) {
    this.guessed = true;
  }
}

Letter.prototype.toString = function() {
  if(this.guessed) {
    return this.letter;
  } else {
    return "_";
  }
}

module.exports = Letter;
