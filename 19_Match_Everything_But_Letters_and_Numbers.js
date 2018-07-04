// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
// --------------------------------------------------------------------

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /change/; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
// =====================================================================

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// return 6

// Your regex should use the global flag.
// Your regex should find 6 non-alphanumeric characters in "The five boxing wizards jump quickly.".
// Your regex should find 8 non-alphanumeric characters in "Pack my box with five dozen liquor jugs."
// Your regex should find 6 non-alphanumeric characters in "How vexingly quick daft zebras jump!"
// Your regex should find 12 non-alphanumeric characters in "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."