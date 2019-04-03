// IMPORTING THE LETTER CONSTRUCTOR
var LetterConstructor = require('./letter.js');

// PHRASE CONSTRUCTOR CONVERTS THE PHRASE-TO-GUESS INTO AN ARRAY OF LETTER-OBJECTS AND WOKRS ON THE ARRAY WITH FUNCTIONS
function Phrase(phraseToGuess, userGuesses) {
    
    // A STRING THAT HOLDS THE CURRENT PHRASE TO BE GUESSED
    this.phrase = phraseToGuess;
    // AN ARRAY THAT HOLDS USER GUESSES
    this.guesses = userGuesses;
    // AN ARRAY THAT HOLDS LETTER-OBJECTS GENERATED FROM THE ABOVE phraseToGuess STRING
    this.arrayToGuess = [];

    // CREATES AN ARRAY OF OBJECTS FROM THE CHARACTERS OF THE CURRENT PHRASE-TO-GUESS
    this.phraseArray = function () {
        for (var i = 0; i < this.phrase.length; i++) {
            this.arrayToGuess.push(new LetterConstructor(this.phrase[i]));
        };
        return this.arrayToGuess;
    };

    // CREATES A STRING OF GUESSED AND UN-GUESSED CHARACTERS
    this.stringMaker = function () {
        var newString = [];

        // var independentLength = this.phrase.length;
        for (var i = 0; i < this.phrase.length; i++) {
            var checked = (this.arrayToGuess[i].checker());
            newString += checked;
        };
        return newString;
    };

    // "Toggler in a Loop." :P
    // CHECKS USER GUESSESS AND TOGGLES THE BOOLEAN VALUE OF LETTER-OBJECTS FROM FALSE TO TRUE (IF GUESSED CORRRECTLY)
    this.arrayToggler = function () {
        for (var i = 0; i < this.arrayToGuess.length; i++) {
            for (var k = 0; k < this.guesses.length; k++) {
                    this.arrayToGuess[i].toggler(this.guesses[k]);
            };
        };
        // RUNS THE STRINGMAKER FUNCTION TO SHOW IF NEW USER GUESS REVEALS ANY LETTERS
        return (this.stringMaker());
    };
};

module.exports = Phrase;

/////////////////////////////////////////////////////////////////////////
//// This is a sample run of the code to check that the code works alone

// var localPhraseToGuess = 'Vitaliy feytser';
// var localUserGuesses = ['l', 'i', 't', 'a', 'e', 'f'];

// var vitaliy = new Phrase(localPhraseToGuess, localUserGuesses);

// console.log('vitaliy: ', vitaliy);

// var forLog = vitaliy.phraseArray();
// console.log('forLog: ', forLog);

// var forLog2 = vitaliy.arrayToggler();
// console.log('forLog2: ', forLog2);
// console.log('vitaliy: ', vitaliy);

