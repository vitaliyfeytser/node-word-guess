var letters = require('./letter.js')
var words = require('./word.js')

var gameTheme = 'The theme of the game is Marvel Superhero Movies';

var phraseToGuess = [
    'Captain America',
    'The Avengers',
    'Winter Soldier',
    'Thor',
    'Ironman'
];

var allIndexesArray = [];

function uniqueRandomIndex() {
    for (var i = 0; i < phraseToGuess.length; i++) {
        allIndexesArray.push(i);
    }
}
uniqueRandomIndex();
console.log('allIndexesArray: ', allIndexesArray);



// var currentGuessIndex = Math.floor(Math.random() * phraseToGuess.length);
// console.log('currentGuessIndex: ', currentGuessIndex);

// allIndexesArray.splice(currentGuessIndex);
// console.log('allIndexesArray: ', allIndexesArray);

// function randomIndex() {
//     // currentGuessSelector = Math.floor(Math.random() * wordToGuess.length);
//     if (currentGuessIndex === currentGuessIndexRemember) {
//         for (var i = 0; i < 2; i++) {
//         currentGuessIndex = Math.floor(Math.random() * wordToGuess.length);
//         }
//     }
//     currentGuessIndexRemember = currentGuessIndex;
//     console.log('currentGuessIndex: ', currentGuessIndex);
//     console.log('currentGuessIndexRemember: ', currentGuessIndexRemember);
//     console.log('currentGuessSelector: ', currentGuessSelector);
// }
// randomIndex();



// console.log('currentGuessSelector: ', currentGuessSelector);
console.log('lalalalalal ');


