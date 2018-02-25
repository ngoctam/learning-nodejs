var greetings = require('./greetings.json');

var greet = function () {
    console.log(greetings.en);
};

var greet2 = function () {
    console.log('Hello !!!!!');
};

module.exports = greet;