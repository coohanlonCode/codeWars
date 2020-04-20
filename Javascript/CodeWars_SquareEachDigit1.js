// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(inputInteger) {

    let arrayOfSquaredInts = []

    // inputInteger.toString().split('').forEach(numberAsText => {
    //     let squaredValue = Math.pow(parseInt(numberAsText), 2)
    //     let squaredString = squaredValue.toString()
    //     arrayOfSquaredInts.push(squaredString)
    // }  )

    inputInteger.toString().split('').forEach(numberAsText =>
        arrayOfSquaredInts.push(Math.pow(parseInt(numberAsText), 2).toString())
    )

    return parseInt(arrayOfSquaredInts.join(''))
}


var assert = require('assert');
assert.equal(squareDigits(9119), 811181) 