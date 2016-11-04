"use strict";

function checkPangram(text){
    var regex, textStr;
    regex = /([a-z])(?!.*\1)/g;
    textStr = text.toLowerCase().replace(/[a-z]+\d+/g, '').split('').sort().join('');
    if((textStr.match(regex) || []).length === 26){
        return true;
    } else {
        return false;
    }
}

/*
var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkPangram("The quick brown fox jumps over the lazy dog."), true, "brown fox");
    assert.equal(checkPangram("ABCDEF"), false, "ABC");
    assert.equal(checkPangram("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!"), true, "Bored?");
    console.log("All done? Earn rewards by using the 'Check' button!");
}

*/
