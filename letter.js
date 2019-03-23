var inquirer = require('inquirer');

var Letter = function (letter) {
    this.letter = letter;
    this.boolean = false;
    this.toggler = function (toggle) {
        if (toggle = 1) {
            this.boolean = true;
        } else {
            this.boolean = false;
        }
    }
}

// module.exports = Letter;

var letter = new Letter;

var letterToGuess = 'v';

