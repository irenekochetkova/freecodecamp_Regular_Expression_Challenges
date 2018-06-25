// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

//For example: 
//let password = "abc123";
//let checkPass = /(?=\w{3,6})(?=\D*\d)/;
//checkPass.test(password); // Returns true
// (?=\w{3,6}) - the regex must be matched with from three to six word characters
// (?=\D*\d) - \D matches any single character that is not a digit (same as [^0-9])
//             *  he preceding item will be matched zero or more times. 
//             \d (digit) matches any single digit (same as [0-9])
// ------------------------------------------------------------------------
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

// let sampleWord = "astronaut";
// let pwRegex = /change/; // Change this line
// let result = pwRegex.test(sampleWord);
// ==========================================================================

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

// return false;