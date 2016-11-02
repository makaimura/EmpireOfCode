"use strict";

function countUnits(number) {
    var bin, units;
    bin = number.toString(2);
    units = [];
    units = bin.match(/1/g);
    return units.length;
}

/*
var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countUnits(4), 1, "0b100");
    assert.equal(countUnits(15), 4, "0b1111");
    assert.equal(countUnits(1), 1, "0b1");
    assert.equal(countUnits(1022), 9, "0b1111111110");
    console.log("Use 'Check' to earn sweet rewards!");
}
*/
