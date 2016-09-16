var gameJS = require('./game.js');
var wordToGuess = gameJS.wordToGuess;
var blanksAndSuccesses = [];


for(var i=0; i <wordToGuess.length; i++){
		blanksAndSuccesses.push("_");
	};
	console.log(blanksAndSuccesses);

exports.blanksAndSuccesses = blanksAndSuccesses;
