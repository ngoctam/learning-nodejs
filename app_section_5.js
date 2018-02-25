/*
*** Lecture 32: Object Properties, First Class Functions, and Arrays
*/
console.log('\n *** Lecture 32: Object Properties, First Class Functions, and Arrays');

// object properties and methods
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

// function and arrays
var arr = [];

arr.push(function(){
    console.log('Hello world 1 !');
})
arr.push(function(){
    console.log('Hello world 2 !');
})
arr.push(function(){
    console.log('Hello world 3 !');
})

arr.forEach(function(item){
    item();
})

/*
*** Lecture 33: The Node Event Emitter Part 1
*/
console.log('\n *** Lecture 33: The Node Event Emitter Part 1');

var Emitter = require('./emitter');
var emitr = new Emitter();
emitr.on('greet', function() {
    console.log('Somewhere, someone said hello...');
});

emitr.on('greet', function() {
    console.log('A greet occurred...');
});

console.log('Hello !');
emitr.emit('greet');

/*
*** Lecture 34: The Node Event Emitter Part 2
*/
console.log('\n *** Lecture 34: The Node Event Emitter Part 2');

var Emitter = require('events');
var eventConfig = require('./config').events;

var emitr = new Emitter();
emitr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello...');
});

emitr.on(eventConfig.GREET, function() {
    console.log('A greet occurred...');
});

console.log('Hello !');
emitr.emit(eventConfig.GREET);

/*
*** Lecture 35: Object.create and Prototypes
*/
console.log('\n *** Lecture 35: Object.create and Prototypes');

var person = {
    fistname: '',
    lastname: '',
    greet: function() {
        return this.firtname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firtname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firtname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());

/*
*** Lecture 36: Inheriting From the Event Emitter
*/
console.log('\n *** Lecture 36: Inheriting From the Event Emitter');

var EvenEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world !';
}

util.inherits(Greetr, EvenEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet');
    this.emit('greet_data', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.on('greet_data', function(data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Tony');

/*
*** Lecture 37: ES6 Template Strings (http://babeljs.io/)
Please check jsconfig.json for ES6
*/
console.log('\n *** Lecture 37: ES6 Template Strings');

var name = 'John Doe';
var greet = 'Hello ' + name;
var greet2 = `Hello ${ name }`;

console.log(greet);
console.log.greet2;

/*
*** Lecture 38: .call and .apply
*/
console.log('\n *** Lecture 38: .call and .apply');

var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe' }); // .call will override this
obj.greet.apply({ name: 'Jane Doe' }); // Same .call, only different with pass params via []

/*
*** Lecture 39: Inheriting From the Event Emitter part 2
*/
console.log('\n *** Lecture 39: Inheriting From the Event Emitter part 2');

// Fix constructor in Lecture 36
var EvenEmitter = require('events');
var util = require('util');

function Greetr() {
    EvenEmitter.call(this);
    this.greeting = 'Hello world !';
}

util.inherits(Greetr, EvenEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet');
    this.emit('greet_data', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.on('greet_data', function(data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Tony');

// New Example
console.log('\n --- New Example:');
var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this); // Remove this line to see problem
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();

/*
*** Lecture 40: ES6 Classes
*/
console.log('\n *** Lecture 40: ES6 Classes');

'use strict';

class Person2 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

// function Person2(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// 
// Person2.prototype.greet = function() {
//     console.log('Hello, ' + this.firstname + ' ' + this.lastname);
// }

var john = new Person2('John', 'Doe');
john.greet();

var jane = new Person2('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

/*
*** Lecture 41: Inheriting From the Event Emitter part 3 (use ES6 Class)
*/
console.log('\n *** Lecture 41: Inheriting From the Event Emitter part 3 (use ES6 Class)');

var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.on('greet_data', function(data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Tony');