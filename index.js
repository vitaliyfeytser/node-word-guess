var inquirer = require('inquirer');
var colors = require('colors');
var phraseObj = require('./word.js');

// The theme of the game is Marvel Superhero Movies

var phrasesToGuess = [
    'Captain America',
    'The Avengers',
    'Winter Soldier',
    'Thor Ragnarok',
    'Ironman',
    'Captain Marvel',
    'Guardians of the Galaxy',
    'Avengers Endgame',
    'Avengers Age of Ultron',
    'Ant-Man',
    'Doctor Strange'
];


var guessesLeft = 0;
var guessCount = 0;
var leftToGuess = 999;
var currentPhraseToGuess = 'Marvel';
var userGuesses = ['m', 'o', 'v', 'i', 'e', 's'];
// create empty object that waits for a phrase to be chosen
var newPhrase = {};
// create empty array for phrase indeces
var allPhrasesIndeces = [];

// use a forloop to itirate through phraseToGuess and get all indeces into allPhrasesIndeces
function refillAllPhraseIndeces() {
    allPhrasesIndeces = [];
    for (var i = 0; i < phrasesToGuess.length; i++) {
        allPhrasesIndeces.push(i);
    }
    allPhrasesIndeces.reverse();
}
refillAllPhraseIndeces();

/////////////////////////////////////////////////////////////////////////////
// RANDOM ENGINE
/////////////////////////////////////////////////////////////////////////////
function randomSelector() {
    if (allPhrasesIndeces.length <= 0) {
        refillAllPhraseIndeces();
    }
    // choose a random index from allPhraseIndeces
    var getRandom = Math.floor(Math.random() * allPhrasesIndeces.length);
    // console.log('getRandom', getRandom);

    // set currentPhraseToGuess to selected random phrase index
    currentPhraseToGuess = phrasesToGuess[allPhrasesIndeces[getRandom]];
    // console.log('currentPhraseToGuess: ', currentPhraseToGuess);

    // remove the phrase index after using it (to avoid repetition)
    allPhrasesIndeces.splice(getRandom, 1);
    // console.log('allPhrasesIndeces', allPhrasesIndeces);
}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// UPDATES THE NUMBER OF NOT-GUESSED LETTERS
function updateLeftToGuess() {
    // console.log('newPhrase.arrayToGuess[0].letter: ', newPhrase.arrayToGuess[0].letter);
    leftToGuess = newPhrase.arrayToGuess.length;
    // leftToGuess = 0;
    for (var m = 0; m < newPhrase.arrayToGuess.length; m++) {
        if (newPhrase.arrayToGuess[m].letter === " ") {
            // console.log('newPhrase.arrayToGuess[m].letter', newPhrase.arrayToGuess[m].letter);
            // console.log('We have a SPACE!');
            leftToGuess--;
        };
        if (newPhrase.arrayToGuess[m].boolean === true) {
            // console.log('Shit is TRUE!');
            leftToGuess--;
        };
    }
    // leftToGuess = leftToGuess - userGuesses.length;
}

// CREATES THE NEW PHRASE OBJECT AND SETS START VALUES
function createNewPhrase() {
    userGuesses = [];

    randomSelector();
    newPhrase = new phraseObj(currentPhraseToGuess, userGuesses);
    newPhrase.phraseArray();
    // GUESSES ALLOWED ARE DERIVED AS 1.5 TIMES THE PHRASE CHARACTER COUNT (THIS IS ARBITRARY - SEEMED LIKE A GOOD FIT)
    guessesLeft = Math.round((currentPhraseToGuess.length * 1.5));

    // console.log('==============================================\n');
    // console.log('newPhrase: ', newPhrase);
    // console.log('==============================================\n');

    newPhrase.arrayToggler();
    updateLeftToGuess();
}

// THIS FUNCTION MANAGES THE DISPLAY OF ALL RELEVANT DATA EXCEPT FOR THE INQUIRER PROMPTS
function statusDisplay() {
    newPhrase.arrayToggler();
    updateLeftToGuess();
    console.log('\n\n\n\n\n');
    console.log('-----------------------'.gray);
    console.log(colors.green('| Guess Count_____%s  '), guessCount);
    console.log(colors.yellow('| Guesses Left____%s '), guessesLeft);
    console.log(colors.gray('| Left To Guess___%s '), leftToGuess);
    console.log('-----------------------'.gray);
    console.log('\nGuess this Marvel Movie Title: \n'.yellow);

    console.log(newPhrase.arrayToggler().green);
    console.log('\nYour guesses so far:'.gray);
    console.log(userGuesses.join(' ').toUpperCase().green);
    // var name = 'Marak';
    // console.log(colors.green('Hello %s'), name);
    // // outputs -> 'Hello Marak'
}

// RUNS THE PROMPT FUNCTION OF INQUIRER.JS TO COLLECT USER GUESS INPUT
function runGuess() {

    inquirer.prompt([{
        type: 'input',
        name: 'userGuess',
        message: 'Guess the next letter..'
    }]).then(function (userInput) {
        updateLeftToGuess();
        // IF 'ENTER' WAS PRESSED WITHOUT A CHARACTER INPUT, PUSH '* ' TO THE ARRAY
        if (userInput.userGuess === '') {
            userGuesses.push("* ");
        } else {
            // GRABS THE FIRST CHARACTER OF USER INPUT AND USES IT AS USER GUESS
            userGuesses.push(userInput.userGuess.charAt(0));
        }
        // UPDATES USER GUESS COUNT
        guessCount++;
        // UPDATES GUESSES LEFT TO THE USER
        guessesLeft--;
        // UPDATES HOW MANY LETTERS HAVE NOT BEEN GUESSED YET
        updateLeftToGuess();
        // EVALUATES IF USER HAS USED ALL OF THE AVAILABLE GUESSES BEFORE GUESSING ALL LETTERS
        if (guessesLeft === 0 && leftToGuess !== 0) {
            console.log('======================'.red);
            console.log("\nAll out of guesses!\n".red);
            console.log('======================'.red);
            // ASKS USER FOR ANOTHER ROUND
            tryAgain();
        } else if (leftToGuess === 1) {
            // IF EVERYTHING HAS BEEN GUESSED CORRECTLY ANNOUNCES VICTORY
            youWon();
        } else {
            // 
            inquirerRun();
        }
    });
}

// ASKS USER WHETHER THEY'D LIKE TO GO ANOTHER ROUND
function tryAgain() {
    inquirer.prompt([{
        type: "confirm",
        name: "tryAgain",
        message: "Try another?",
    }]).then(function (userInput) {
        // RELEVANT DATA IS RESET TO THE NEW GUESS PHRASE 
        if (userInput.tryAgain) {
            guessesLeft = 0;
            userGuesses = [];
            guessCount = 0;
            leftToGuess = 999;
            // EVALUATES IF THE USER HAS ITIRATED THROUGH ALL AVAILABLE GUESS-PHRASES, IF TRUE, REFILLS ARRAY ANEW
            // if (allPhrasesIndeces[0] === null) {
            //     refillAllPhraseIndeces();
            //     createNewPhrase();
            //     inquirerRun();
            // } else {
            createNewPhrase();
            inquirerRun();
            // }
        }
    });
}

// SUCCESS ANNOUNCEMENT AND PROMPT FOR A NEW ROUND
function youWon() {
    statusDisplay();

    console.log('================================='.america)
    console.log('\nCongrats! You guessed correctly!\n'.inverse)
    console.log('================================='.america)

    tryAgain();
}

function inquirerRun() {
    // EVALUATES IF USER HAS USED UP HIS GUESSES
    if (guessCount < Math.round((currentPhraseToGuess.length * 1.5)) || leftToGuess !== 0) {
        updateLeftToGuess();
        statusDisplay();
        runGuess();
    } else if (guessCount === Math.round((currentPhraseToGuess.length * 1.5)) || leftToGuess !== 0) {
        updateLeftToGuess();
        statusDisplay();
        tryAgain();
    } else {
        updateLeftToGuess();
        statusDisplay();
        tryAgain();
    }
}

// THESE FUNCTIONS EXECUTE AT START
createNewPhrase();
inquirerRun();