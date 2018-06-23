// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]
// ---------------------------------------------
// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /change/; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// =====================================================


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// return 31;