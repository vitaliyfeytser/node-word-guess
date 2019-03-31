var LetterConstructor = require('./letter.js');

function Phrase(phraseToGuess, userGuesses) {

    this.phrase = phraseToGuess;
    // this.guesses = [];
    this.guesses = userGuesses;
    this.arrayToGuess = [];

    this.phraseArray = function () {
        // var newArray = [];
        for (var i = 0; i < this.phrase.length; i++) {
            this.arrayToGuess.push(new LetterConstructor(this.phrase[i]));
        }
        return this.arrayToGuess;
    };

    this.stringMaker = function () {
        console.log((this.phrase.length));
        // console.log((this.phraseArray()[0]).checker());
        var newString = [];

        var independentLength = this.phrase.length;
        console.log('stringMaker independentLength: ', independentLength);
        for (var i = 0; i < independentLength; i++) {
            var checked = (this.phraseArray()[i]).checker();
            // console.log(checked);
            // console.log((this.phraseArray()[i]).checker());
            newString += checked;
            // console.log('newString: ', newString);
        }
        return newString;
    };

    // "Toggler in a Loop." :P

    ///////////////////////////////////////////
    // PSUEDOCODE ///////

    // TAKE A CHARACTER THAT IS THE USER GUESS AS AN ARGUMENT AND
    // RUN THE 'CHECCKER' FUNCTION FROM LETTER.JS ON IT
    // RESULT IS A CHANGED LETTER-OBJECT 

    this.arrayToggler = function () {
        for (var i = 0; i < this.arrayToGuess.length; i++) {
            console.log('I am phrase.length!');
            console.log(this.arrayToGuess[i]);
            console.log(this.arrayToGuess[i].letter);
            console.log(this.guesses[i]);
            // this.arrayToGuess[i].toggler(this.guesses[i]);

            for (var k = 0; k < this.guesses.length; k++) {
                console.log(this.guesses[k]);
                // if (this.arrayToGuess[i] === this.guesses[k]) {
                    this.arrayToGuess[i].toggler(this.guesses[k]);
                // }
            }

            // this.arrayToGuess[i].toggler(this.guesses.forEach(function(element) {element}));
        }

        // var independentLength = this.phrase.length;
        // console.log('arrayToggler independentLength: ', independentLength);
        // for (var i = 0; i < independentLength; i++) {

        //     // This code changes the boolean value of the phraseArray()
        //     for (var m = 0; m < this.guesses.length; m++) {
        //         (this.phraseArray()[i]).toggler(this.guesses[m]);
        //         console.log('(this.phraseArray()[m]): ', (this.phraseArray()[m]));
        //     }
        // These logs show the letter of the object and that it's value has beeen changed
        // console.log('(this.phraseArray()[i]).toggler(): ', (this.phraseArray()[i]).letter);
        // console.log('(this.phraseArray()[i]).toggler(): ', (this.phraseArray()[i]).toggler(this.guesses[i]));

        // this.phrase += (this.phraseArray()[i]).toggler(this.guesses[i]);
        // this.phraseArray()[i].forEach((this.phraseArray()[i]).toggler());
        // console.log('last arrayTogler log: ', (this.phraseArray()[i]).toggler(this.phraseArray()[i].boolean));



        // return this.guesses + (this.phraseArray());
        // this.phraseArray();
        // }
        return (this.stringMaker());
    };

}

module.exports = Phrase;

/////////////////////////////////////////////////////////////////////////
//// This is a sample run of the code to check that the code works alone

var localPhraseToGuess = 'Vitaliy feytser';
var localUserGuesses = ['l', 'i', 't', 'a', 'e', 'f'];

var vitaliy = new Phrase(localPhraseToGuess, localUserGuesses);

console.log('vitaliy: ', vitaliy);
// console.log(('--vitaliy.phraseArray().length: ', vitaliy.phraseArray().length));
// console.log('vitaliy.phraseArray(): ', vitaliy.phraseArray());
// console.log('vitaliy.phraseArray()[1]: ', vitaliy.phraseArray()[1]);

// console.log('vitaliy.stringMaker() bottom: ', vitaliy.stringMaker());

// console.log('vitaliy.arrayToggler(): ', vitaliy.arrayToggler());

var forLog = vitaliy.phraseArray();
console.log('forLog: ', forLog);

var forLog2 = vitaliy.arrayToggler();
console.log('forLog2: ', forLog2);


// var forLog3 = vitaliy.phraseArray().arrayToggler();
// console.log('forLog3: ', forLog3);