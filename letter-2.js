var inquirer = require('inquirer');

var myName = ('Vitaliy Feytser').toLowerCase();

// takes a string and returns object - converts phrases into 
function WordDestructor(wordToGuess) {
    this.wordArray = Array.from(wordToGuess);
}

// takes a single letter and makes it an object
function LetterConstructor(letter) {
    this.letter = letter;
    this.boolean = false;
}

var guess = new WordDestructor(myName);
console.log('this, guess: ', this, guess);
console.log('guess: ', guess);

var letterObjects = [];

for (var i = 0; i < guess.wordArray.length; i++) {
    var oneLetterObject = new LetterConstructor(guess.wordArray[i]);
    letterObjects.push(oneLetterObject);
}

console.log(guess.wordArray.length);

console.log('letterObjects: ', letterObjects);
console.log('-------------------------------------');
console.log('letterObjects: ', letterObjects[0]);

// This code sets the boolean value of letterObjects and prints blanks for false boolean and visible characters for true
var blanks = [];
var userGuesses = ['f', 'i'];

for (var i = 0; i < letterObjects.length; i++) {

    for (var k = 0; k < userGuesses.length; k++) {
        if (userGuesses[k] === letterObjects[i].letter) {
            letterObjects[i].boolean = true;
        }
    }

    if (letterObjects[i].boolean) {
        blanks.push(letterObjects[i].letter + ' ');
    } else if (letterObjects[i].letter === ' ') {
        blanks.push('  ');
    } else {
        blanks.push('_ ');
    }
}
console.log((blanks).join(''));
console.log(userGuesses.length);





// inquirer.prompt([{
//     type: 'input',
//     name: 'userGuess',
//     message: 'Guess my name..'
// }]).then(function (userInput) {
//     if (userInput.userGuess === 'v') {
//         console.log('Well done.')
//     } else {
//         console.log('Try again!')
//     }
// });