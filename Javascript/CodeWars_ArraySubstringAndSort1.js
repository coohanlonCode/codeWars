// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of
// a1 which are substrings of strings of a2.
//
// #Example 1: 
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
//
// #Example 2: 
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

function inArray(requestedSubstringsArray, wordArray) {

    let sortedPresentSubstringsArray = []

    wordArray.forEach(word => {
        requestedSubstringsArray.forEach(substring => {
            (word.includes(substring) || word === substring) && sortedPresentSubstringsArray.push(substring)
        })
    })

    return Array.from(new Set(sortedPresentSubstringsArray.sort()));
}

function inArray2(requestedSubstringsArray, wordArray) {

    let presentSubstrings = []

    // .filter is a type of forEach
    wordArray.filter(word => requestedSubstringsArray.forEach(substring => {
        return word.includes(substring) && presentSubstrings.push(substring)
    }))

    return Array.from(new Set(presentSubstrings)).sort();
}


var assert = require('assert');

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

let a1 = ["xyz", "live", "strong"]
assert.equal(inArray(a1, a2).toString(), ["live", "strong"].toString())
assert.equal(inArray2(a1, a2).toString(), ["live", "strong"].toString())

a1 = ["live", "strong", "arp"]
assert.equal(inArray(a1, a2).toString(), ["arp", "live", "strong"].toString())
assert.equal(inArray2(a1, a2).toString(), ["arp", "live", "strong"].toString())

a1 = ["tarp", "mice", "bull"]
assert.equal(inArray(a1, a2).toString(), [].toString())
assert.equal(inArray2(a1, a2).toString(), [].toString())
