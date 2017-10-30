
var prompt = require("prompt");
var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

// var allLetters = /[a-zA-Z]/.test(val);
var newWord = new Word();
var newLetter = new Letter();
var allLetters;
var wins = 0;
var losses = 0;
var guesses = 9;

console.log("Lets Play Hangman");
console.log("Guess the name of the DBZ character");

startthis();

function startthis() {
    newWord.randomBank();
    letsPlay();
}


function letsPlay() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess your letter",
            name: "letter",
            validate: function(val) {
                //  Check for caps and lower case. we will change it
                allLetters = /[a-zA-Z]/.test(val);
                if (allLetters && val.length === 1) {
                    console.log("Hey it worked");
                    return true;
                } else {
                    console.log("\nPlease use only letters (One letter at a time)");
                    return false;
                }
            }
        }
    ]).then(function(userLetter) {
        for (var i=0; i < newWord.displayWordOrBlank.length; i++) {
            if (newWord.randomWord[i] === userLetter.letter) {

            }
        }
    })
}

