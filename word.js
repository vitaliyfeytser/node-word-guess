

var Word = function (stringToGuess) {
    // this.splicer2 = function () {
    //     var splicedArray = [];
    //     for (var i = 0; i < this.stringToGuess; i++) {
    //         splicedArray.push(i + ',');
    //     }
    // }
    this.splicer = stringToGuess.splice(',');
}