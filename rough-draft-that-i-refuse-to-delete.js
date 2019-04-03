var inquirer = require('inquirer');
var LetterConstructor = require('./letter');

var phraseToGuess = ('Vit').toLowerCase();

var letterObjects = [];

function initialRun() {
    letterObjects = [];

    // takes a string and returns object - converts phrases into 
    function WordDestructor(wordToGuess) {
        this.wordArray = Array.from(wordToGuess);
    }

    // takes a single letter and makes it an object
    // function LetterConstructor(letter) {
    //     this.letter = letter;
    //     this.boolean = false;
    // }

    guess = new WordDestructor(phraseToGuess);

    for (var i = 0; i < guess.wordArray.length; i++) {
        var oneLetterObject = new LetterConstructor(guess.wordArray[i]);
        letterObjects.push(oneLetterObject);
    }
}
initialRun();



// This code sets the boolean value of letterObjects and prints blanks for false boolean and visible characters for true

var guessesLeft = 0;
var guessCount = 0;
var userGuesses = [];
var leftToGuess = 999;

function evaluateAndPrint() {
    var blanks = [];
    // set the number of allowed guesses => length of current phrase times 1.5
    guessesLeft = Math.round((letterObjects.length * 1.5) - guessCount);
    // set the number of letters to guess to current phrase character length 
    leftToGuess = letterObjects.length;

    for (var i = 0; i < letterObjects.length; i++) {
        // compare all current user guesses to current guess-phrase, if it's a match, set letterObject to true
        for (var k = 0; k < userGuesses.length; k++) {
            if (userGuesses[k] === letterObjects[i].letter) {
                letterObjects[i].boolean = true;
            }
        }
        // evaluate all letterObjects and append to var 'blanks' the characters set to true, underscore + space for false, and double-space for spaces
        if (letterObjects[i].boolean) {
            blanks.push(letterObjects[i].letter + ' ');
            // decrement guesses left to user
            leftToGuess--;
        } else if (letterObjects[i].letter === ' ') {
            blanks.push('  ');
            // decrement spaces from guesses left to user
            leftToGuess--;
        } else {
            blanks.push('_ ');
        }
    }
    // concatenate the 'blanks' array and print to screen

    console.log('\n\n\n\n\n');
    console.log('Guess Count_____', guessCount);
    console.log('Guesses Left____', guessesLeft);
    console.log('leftToGuess_____', leftToGuess);
    console.log('==============================================\n');
    console.log((blanks).join(''));
    console.log('\n');
    // console.log(userGuesses.length);

}


function runGuess() {
    inquirer.prompt([{
        type: 'input',
        name: 'userGuess',
        message: 'Guess my name..'
    }]).then(function (userInput) {
        userGuesses.push(userInput.userGuess)
        console.log('userGuesses: ', userGuesses);

        guessCount++;
        console.log('guessCount: ', guessCount);

        inquirerRun();
    });
}

function tryAgain() {
    inquirer.prompt([{
        type: "confirm",
        name: "tryAgain",
        message: "Try another?",
    }]).then(function (userInput) {
        if (userInput.tryAgain) {
            initialRun();
            userGuesses = [];
            guessCount = 0;
            leftToGuess = 999;
            inquirerRun();
        }
    });
}

function youWon() {
    console.log('=================================')
    console.log('\nCongrats! You guessed correctly!\n')
    console.log('=================================')

    tryAgain();
}

function inquirerRun() {
    if (leftToGuess === 1) {
        youWon();
    } else if (guessCount < Math.round((letterObjects.length * 1.5))) {
        evaluateAndPrint();
        runGuess();
    } else {
        tryAgain();
    }
}

inquirerRun();