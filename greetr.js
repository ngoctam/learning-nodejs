'use strict';

var EvenEmitter = require('events');

module.exports = class Greetr extends EvenEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world !';
    }

    greet(data) {
        console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet');
        this.emit('greet_data', data);
    }
}