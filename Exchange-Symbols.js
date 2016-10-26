"use strict";

function symbExchange(line) {
    var first, last, middle, sliceEnd, result, shrtResult;
    first = line.slice(0,1);
    last = line.slice(-1);
    if(line.length >= 3){
        sliceEnd = line.length -1;
        middle = line.slice(1, sliceEnd);
        result = last + middle + first;
        return result;
    } else {
        shrtResult = last + first;
        return shrtResult;
    }
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(symbExchange("az"), "za", "1st example");
    assert.equal(symbExchange("aiiiiiz"), "ziiiiia", "2nd example");
    assert.equal(symbExchange("length"), "hengtl", "3nd example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
