
function LetterConstructor(letter) {
    this.letter = letter;
    this.boolean = false;

    this.toggler = function(char) {
        if (this.letter === char) {
            return this.boolean = true;
        } else {
            return this.boolean = false;
        }
    };

    this.checker = function() {
        if (this.boolean === true) {
            return this.letter;
        } else {
            return "_ ";
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