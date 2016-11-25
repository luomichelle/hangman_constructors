var WORDS = require('./wordList');
var Word = require('./word');
var inquirer = require('inquirer');

function Hangman() {
  this.word = new Word(WORDS[Math.floor(Math.random() * WORDS.length)]);
  this.guesses = 15;
}

console.log("hangman is running")
Hangman.prototype.play = function(cb) {
  var self = this;
  this.getGuess(function() {
    if(self.word.solved()) {
      console.log(self.word.toString());
      console.log("You win!");
      cb();
    } else if(self.guesses <= 0) {
      console.log("Out of guesses!");
      cb();
    } else {
      self.play(cb);
    }
  });
}


Hangman.prototype.getGuess = function(cb) {
  var self = this;
  console.log("Guesses left: " + self.guesses);
  console.log(this.word.toString());
  inquirer.prompt([
    {
      name: "letter",
      type: "input",
      message: "Guess a letter"
    }
  ]).then(function(answer) {
    if(answer.letter.length > 1) {
      console.log("One letter only please :)");
      return cb();
    }
    self.guesses--;
    self.word.guessLetter(answer.letter);
    cb();
  });
}


console.log("working?")

module.exports = Hangman;
