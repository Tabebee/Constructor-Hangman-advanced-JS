
var Letter = require("./letter.js");

var Word = function () {
    var randomWord;
    var displayWordOrBlank;
    this.randomBank = function () {
        //    Word bank to grab from
        var bank = [ "son goku", "vegeta", "kakarot", "gohan", "piccolo", "android eighteen", "frieza",
            "goten", "trunks", "bulma", "chichi", "krillin", "yamcha", "majin buu", "hercule",
            "videl", "berus", "whis", "zamasu", "goku black"];
        //  Grab random word from bank
        randomWord = bank[Math.floor(Math.random() * bank.length)];
        var guessWord = randomWord.split("");
        displayWordOrBlank = [];
        var newLetter = new Letter();
        for ( var i=0; i < randomWord.length; i++) {
            displayWordOrBlank.push(newLetter.placeholder);
        }

        console.log(displayWordOrBlank.join(" "));

    };
};

module.exports = Word;