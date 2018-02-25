/*
*** Lecture 17: first-class function
*/
console.log('\n *** Lecture 17: first-class function');

// function statement
function greet() {
    console.log('hi');
}
greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi Tony');
}
greetMe();

// it's first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function(){
    console.log('Hello Tony !');
})

/*
*** Lecture 18: Build a Module
*/
console.log('\n *** Lecture 18: Build a Module');

var greet = require('./greet')
greet();

/*
*** Lecture 19: Objects and Object Literals
*/
console.log('\n *** Lecture 19: Objects and Object Literals');

var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function () {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

person.greet();

console.log(person['firstname']);

/*
*** Lecture 20: Prototypal Inheritance and Function Constructors
*/
console.log('\n *** Lecture 20: Prototypal Inheritance and Function Constructors');

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Doe');

john.greet();
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

/*
*** Lecture 21: By Reference and By Value
*/
console.log('\n *** Lecture 21: By Reference and By Value');

// Pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

// Pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

/*
*** Lecture 22: Immediately Invoked Function Expressions (IIFEs)
*/
console.log('\n *** Lecture 22: Immediately Invoked Function Expressions (IIFEs)');

var firstname = 'Jane';

(function() {
    var firstname = 'John 1';
    console.log(firstname);
}());

(function(lastname) {
    var firstname = 'John 2';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);

/*
*** Lecture 25: More on require
*/
console.log('\n *** Lecture 25: More on require');

var greets = require('./greets');
greets.english();
greets.spanish();

/*
*** Lecture 26: Module Patterns
*/
console.log('\n *** Lecture 26: Module Patterns');

var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello greet3.js';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();

/*
*** Lecture 27: exports vs module.exports
*/
console.log('\n *** Lecture 27: exports vs module.exports');

var greet6 = require('./greet6');
// greet6.greet(); // it's not working

var greet7 = require('./greet7');
greet7.greet();

/*
*** Lecture 28: Requiring Native (Core) Modules
*/
console.log('\n *** Lecture 28: Requiring Native (Core) Modules');

var util = require('util');
var name = 'Tony';
var greeting = util.format('Hello %s', name);
util.log(greeting);