// To specify a certain number of patterns, just have that one number between the curly brackets.

// For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.
// ------------------------------------------------------------------
// Change the regex timRegex to match the word "Timber" only when it has four letter m's.

// let timStr = "Timmmmber";
// let timRegex = /change/; // Change this line
// let result = timRegex.test(timStr);

// ==============================================================


let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);


// Your regex should use curly brackets.
// Your regex should not match "Timber"
// Your regex should not match "Timmber"
// Your regex should not match "Timmmber"
// Your regex should match "Timmmmber"
// Your regex should not match "Timber" with 30 m\'s in it.