"use strict";

function clockAngle(time){
    var mins, hours, minInHour, hourInHour, minAngle, totalAngle;
    mins = time.slice(3,5);
    hours = time.slice(0,2);
    hours = hours % 12;
    
    minInHour = 0.5 * mins;
    hourInHour = 30 * hours;
    minAngle = 6 * mins;
    totalAngle = Math.abs(minInHour + hourInHour - minAngle);
    if(totalAngle >= 180){
        return 360 - totalAngle; 
    }
    else {
        return totalAngle;
    }
}

/*
var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(clockAngle("02:30"), 105, "02:30");
    assert.equal(clockAngle("13:42"), 159, "13:42");
    assert.equal(clockAngle("01:42"), 159, "01:42");
    assert.equal(clockAngle("01:43"), 153.5, "01:43");
    assert.equal(clockAngle("00:00"), 0, "Zero");
    assert.equal(clockAngle("12:01"), 5.5, "Little later");
    assert.equal(clockAngle("18:00"), 180, "Opposite");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
*/
