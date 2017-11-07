//  Create our Letter Constructor to use in our game
var Letter = function (char) {
    //  Properties for the letter
    this.letter = char;
    this.placeholder = "_";
    this.view = !/[a-z]/i.test(char);
    this.toString = function () {
        if (this.view === true) {
            return this.letter;
        }
        return this.placeholder;
    };
    this.solveIt = function () {
        return this.char;
    };
    this.checkGuess = function (guessedLetter) {
        if (guessedLetter.toLowerCase() === this.char) {
            this.visible = true;
            return true;
        }
        return false;
    }

};

module.exports = Letter;

