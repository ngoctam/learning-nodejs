/*
*** Lecture 47: Buffers
*/
console.log('\n *** Lecture 47: Buffers');

var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString()); // Output: Hello
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString()); // Output: wollo

/*
*** Lecture 48: ES6 Typed Arrays
*/
console.log('\n *** Lecture 48: ES6 Typed Arrays');

var buffer = new ArrayBuffer(8); // 64bits
var view = new Int32Array(buffer); // 64bits -> 2 number
view[0] = 5;
view[1] = 15;

console.log(view);

/*
*** Lecture 49: Callbacks
*/
console.log('\n *** Lecture 49: Callbacks');

function greet(callback) {
    console.log('Hello !');
    var data = {
        name: 'John Doe'
    }

    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked!');
    console.log(data);
})

greet(function(data) {
    console.log('A different callback was invoked!');
    console.log(data.name);
})

/*
*** Lecture 50: Files and fs
*/
console.log('\n *** Lecture 50: Files and fs');

var fs = require('fs');

// readFileSync -> read file and wait until get content
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', function(err, data){
    // err -> error first callback
    console.log(data);
});

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){
    // err -> error first callback
    console.log(data);
});

console.log('Done!');