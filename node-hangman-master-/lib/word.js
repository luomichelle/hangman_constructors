var Letter = require('./letter');
function Word(word) {
  this.word = word;
  this.letters = [];
  for(var i = 0; i < word.length; i++) {
    this.letters.push(new Letter(word.charAt(i)));
  }
}

Word.prototype.guessLetter = function(letter) {
  for(var i = 0; i < this.letters.length; i++) {
    this.letters[i].guess(letter);
  }
}

Word.prototype.toString = function() {
  var result = [];
  for(var i = 0; i < this.letters.length; i++) {
    result.push(this.letters[i].toString());
  }
  return result.join(' ');
}

Word.prototype.solved = function() {
  var solved = true;
  for(var i = 0; i < this.letters.length; i++) {
    solved = solved && this.letters[i].guessed;
  }

  return solved;
}

module.exports = Word;
