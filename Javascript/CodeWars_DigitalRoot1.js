// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number. Given n, 
//take the sum of the digits of n. If that value has more than one digit, continue 
//reducing in this way until a single-digit number is produced. This is only applicable 
// to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6


function digital_root(inputInteger) {

    let sum = 0;
     
    inputInteger.toString().split('').forEach(numberString => sum += parseInt(numberString))
   
    let isDigitalRoot =  sum.toString().length === 1;

    return  isDigitalRoot? sum : digital_root(sum)
}

var assert = require('assert');
assert.equal(digital_root(16), 7)
assert.equal(digital_root(456), 6) 