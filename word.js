// var Word = function (stringToGuess) {
//     // this.splicer2 = function () {
//     //     var splicedArray = [];
//     //     for (var i = 0; i < this.stringToGuess; i++) {
//     //         splicedArray.push(i + ',');
//     //     }
//     // }
//     this.splicer = stringToGuess.splice(',');
// }

var letterConstr = require('./letter.js');

function Phrase(phraseToGuess, userGuesses) {

    this.phraseArray = function () {
        var newArray = [];
        for (var i = 0; i < phraseToGuess.length; i++) {
            newArray.push(new letterConstr(phraseToGuess[i]));
        }
        return newArray;
    };

    this.stringMaker = function () {
        console.log((this.phraseArray()[0]).checker());
        var newString = '';

        for (var i = 0; i < (this.phraseArray().length); i++) {
            var checked = (this.phraseArray()[i]).checker();
            console.log(checked);
            console.log((this.phraseArray()[i]).checker());
            newString.concat(checked);
            console.log('newString: ', newString);
        }
        return newString;

        // console.log('stringMaker-prints-phraseArray: ', this.phraseArray());

        // var newString = '';
        // letterConstr.prototype.toString = function () {
        //     for (var i = 0; i < this.phraseArray.length; i++) {
        //         newString.push(this.phraseArray[i] + [i]);
        //     }
        // }
        // return newString;

        // if (this.phraseArray !== 0) {
        // for (var i = 0; i < this.phraseArray.length; i++) {
        //             newString.push(this.phraseArray[i] + [i]);
        //         }
        //         return newString;
        //     } else {
        //         return 'no phraseArray!'
        // }

        // this.stringMaker = function () {
        //     var newString = '';
        //     for (var i = 0; i < this.phraseArray.length; i++) {
        //         newString.push(this.phraseArray[i].toString);
        //     }
        //     return newString;
        // }
    }

    // Phrase.prototype.toString = function () {
    //     var printArray = this.phraseArray;

    //     // if (this.yelling) {
    //     //     return greeting.toUpperCase();
    //     // }

    //     return printArray;
}

var localPhraseToGuess = 'vitaliy';
var localUserGuesses = ['l', 'i', 't'];

var vitaliy = new Phrase(localPhraseToGuess, localUserGuesses);

console.log('vitaliy: ', vitaliy);

console.log('vitaliy.phraseArray(): ', vitaliy.phraseArray());
console.log('vitaliy.phraseArray(): ', vitaliy.phraseArray()[1]);
console.log('vitaliy.stringMaker(): ', vitaliy.stringMaker());

// console.log('vitaliy: ', vitaliy + '');