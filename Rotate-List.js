"use strict";

function rotateList(elements, rotates) {
    Array.prototype.push.apply(elements, elements.splice(0, rotates));
    return elements;
}

/*
var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(rotateList([1, 2, 3, 4, 5, 6], 2), [3, 4, 5, 6, 1, 2], "First");
    assert.deepEqual(rotateList([1, 2, 3, 4, 5, 6], 3), [4, 5, 6, 1, 2, 3], "Second");
    assert.deepEqual(rotateList([1, 2, 3, 4, 5, 6], 0), [1, 2, 3, 4, 5, 6], "Third");
    console.log("All set? Click \"Check\" to review your code and earn rewards!");
}
*/
