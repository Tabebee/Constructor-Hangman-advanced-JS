
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
var currentWord;

var bank = [ "son goku", "vegeta", "kakarot", "gohan", "piccolo", "android eighteen", "frieza",
    "goten", "trunks", "bulma", "chichi", "krillin", "yamcha", "majin buu", "hercule",
    "videl", "berus", "whis", "zamasu", "goku black"];

//  Grab random word from bank
function randomizer() {
    var randomWord = bank[Math.floor(Math.random() * bank.length)];
    var currentWord = new Word(randomWord);
    console.log("\n" + currentWord + "\n");
}


console.log("Lets Play Hangman");
console.log("Guess the name of the DBZ character");

startthis();

function startthis() {
    // newWord.randomBank();
    letsPlay();
}


function askLetter() {
    randomizer();
    inquirer.prompt([
        {
            type: "input",
            name: "guessed",
            message: "Guess a letter in the word?",
            validate: function (val) {
                return /[a-z]/gi.test(val);
            }
        }
    ]).then(function (choice) {
        var isLetterInWord = currentWord.guessLetter(choice.guessed);
        if (isLetterInWord) {
            console.log("\nNice, job, that letter is in the word!\n");
        } else {
            guesses--;
            console.log("\nNADA\n");
            console.log("\nYou have " + guesses + " left\n");
        }
        playAgain();
    })
}

function playAgain() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "toPlay",
            message: "Do you want to play again???"
        }
    ]).then(function (choice) {
        if (choice.toPlay) {
            letsPlay();
        } else {
            iQuit();
        }
    });
};

function iQuit() {
    process.exit(0);
}

function makeGuess() {
    askLetter().then(function () {
        if (guess < 1) {
            console.log("\nNo more guesses left.\nThe word was: " + currentWord.getSolution());
        }

    })
}

function letsPlay() {

    guesses = 9;
    makeGuess();


    // inquirer.prompt([
    //     {
    //         type: "input",
    //         message: "Guess your letter",
    //         name: "letter",
    //         validate: function(val) {
    //             //  Check for caps and lower case. we will change it
    //             allLetters = /[a-zA-Z]/.test(val);
    //             if (allLetters && val.length === 1) {
    //                 console.log("Hey it worked");
    //                 return true;
    //             } else {
    //                 console.log("\nPlease use only letters (One letter at a time)");
    //                 return false;
    //             }
    //         }
    //     }
    // ]).then(function(userLetter) {
    //     for (var i=0; i < newWord.displayWordOrBlank.length; i++) {
    //         if (newWord.randomWord[i] === userLetter.letter) {
    //
    //         }
    //     }
    // })
}

