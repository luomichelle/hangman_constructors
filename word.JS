var gameJS = require('./game.js');
var letterJS = require('./letter.js');
var inquirer = require('inquirer');
var blanksAndSuccesses = letterJS.blanksAndSuccesses;
var wordToGuess = gameJS.wordToGuess;
var wordToCheck = wordToGuess.split('');
var wordList = gameJS.wordList;
var correct;
var userGuess;
var guess;
var numGuesses = 10;


var checkLetters = function(){
 if(wordToGuess.indexOf(userGuess) === -1){
            console.log('wrong');
            numGuesses --;
        }else{
            console.log('right');
            correct = true; 
        }
    if(correct){

        for(i=0;i<wordToGuess.length;i++){
        if(wordToGuess[i] === userGuess){
            blanksAndSuccesses[i] = userGuess;  
            }
        }
    }
}



var nextGame = function(){
     if(blanksAndSuccesses.join('') === wordToGuess){
        var index = Math.floor(Math.random()*wordList.length);
        wordToGuess = wordList[index];
        blanksAndSuccesses = [];
         for(var i=0; i <wordToGuess.length; i++){
          blanksAndSuccesses.push('_');
        };
    }
        console.log(blanksAndSuccesses);
  };

var prompt = function() {
 if (numGuesses > 0) {
        inquirer.prompt([{
            name: "userGuess",
            message: "Guess the word"
        }]).then(function(answers) {
            guess = answers.userGuess;
            userGuess = guess.toLowerCase();
            checkLetters();
            console.log("You have " + numGuesses + " left");
            prompt();
            nextGame();
        });
    
    }else{
    console.log('You lost');
    console.log(wordToGuess);
    }
}

 prompt();



