

var Person = function (name) {
    this.name = name;
    this.yelling = false;
}

Person.prototype.toString = function () {
    var greeting = 'My name is ' + this.name;

    if (this.yelling) {
        return greeting.toUpperCase();
    }

    return greeting;
}

var bob = new Person("Bob");

// when concatenating with a string, JavaScript automatically calls `toString`
console.log(bob + '');
bob.yelling = true;
console.log(bob + '');
console.log(bob);

var fred = new Person("Vitaliy");
var sally = new Person("Sally");

var personArray = [bob, fred, sally];

// the same thing happens if we call `join` on a Person array: 
// JavaScript calls `toString` automatially on each person, then joins them together
console.log(personArray.join(', '));