var wordList = ['dog','cat','elephant','cow','mouse','snake'];
var chooseword = Math.floor(Math.random()*wordList.length);
var wordToGuess = wordList[chooseword];


exports.wordToGuess = wordToGuess;
exports.wordList = wordList;

