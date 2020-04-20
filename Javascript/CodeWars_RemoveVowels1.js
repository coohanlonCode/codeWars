// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(inputText) {

    let noVowelString = ''
    inputText.split('').forEach(letter => !isVowel(letter) && (noVowelString += letter))

    return noVowelString
}

function isVowel(letter) {
    return (/[aeiou]/i.test(letter)) ? true : false  // regex '/[<letters>]/<i for case insensitive>'
}


var assert = require('assert');
assert.equal(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!") 