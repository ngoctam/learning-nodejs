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