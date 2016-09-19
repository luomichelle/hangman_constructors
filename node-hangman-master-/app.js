var inquirer = require("inquirer");
var Hangman = require("./lib/hangman");

function playGame() {
  var hm = new Hangman();
  hm.play(function() {
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

playGame();
