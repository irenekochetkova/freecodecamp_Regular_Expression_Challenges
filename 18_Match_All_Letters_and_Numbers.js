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

// Your regex should find 31 alphanumeric characters in "The five boxing wizards jump quickly."
// Your regex should find 32 alphanumeric characters in "Pack my box with five dozen liquor jugs."
// Your regex should find 30 alphanumeric characters in "How vexingly quick daft zebras jump!"
// Your regex should find 36 alphanumeric characters in "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."