// THIS CONSTRUCTOR CREATES A LETTER-OBJECT WITH FOUR KEYS
function LetterConstructor(letter) {
    // THIS KEY HOLDS THE CHARACTER-VALUE OF THE LETTER-OBJECT
    this.letter = letter;
    // PRESETS THE BOOLEAN VALUE OF THE LETTER-OBJECT TO FALSE TO DISPLAY AS UNDERSCORE
    this.boolean = false;
    // THIS FUNCTION CHECKS THE CHARACTER-VALUE OF THE LETTER-OBJECTS AND RETURNS ONE OF THREE: 
    // 1. DOUBLE-SPACE
    // 2. LETTER + SPACE
    // 3. UNDERSCORE + SPACE
    this.checker = function () {
        if (this.letter === " ") {
            return "  ";
        } else if (this.boolean === true) {
            return this.letter + " ";
        } else {
            return "_ ";
        }
    };

    // TOGGLES THE BOOLEAN VALUE OF A LETTER-OBJECT TO TRUE IF MATCHED WITH USER GUESS
    this.toggler = function (char) {
        // TOGGLER FUNCTION NEGATES CAPITALIZATION WHILE COMPARING USER INPUT AND GUESS-PHRASE
        if (this.letter.toLowerCase() === char.toLowerCase()) {
            return this.boolean = true;
        }
    };

}

module.exports = LetterConstructor;

/////////////////////////////////////////////////////////////////////////
//// This is a sample run of the code to check that the code works alone

// var newLetter = new LetterConstructor('v');

// // show the letter object
// console.log(newLetter);
// // run the checker to see that boolean key with false value prints a placeholder
// console.log('checker: ', newLetter.checker());
// // shows the original boolean value
// console.log('boolean: ', newLetter.boolean);
// // passes a couple strings to the newletter.toggler to see if matching works
// console.log('toggler: ', newLetter.toggler('c'));
// console.log('toggler: ', newLetter.toggler('v'));
// // run the checker again to see if the toggler changed the boolean value accordingly with the last match
// console.log('checker: ', newLetter.checker());