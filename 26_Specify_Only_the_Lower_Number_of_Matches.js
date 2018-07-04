// For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
// -------------------------------------------------------
// Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

// let haStr = "Hazzzzah";
// let haRegex = /change/; // Change this line
// let result = haRegex.test(haStr);

// ==========================================================
let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let result = haRegex.test(haStr);

// return true;

// Your regex should use curly brackets.
// Your regex should not match "Hazzah"
// Your regex should not match "Hazzzah"
// Your regex should match "Hazzzzah"
// Your regex should match "Hazzzzzah"
// Your regex should match "Hazzzzzzah"
// Your regex should match "Hazzah" with 30 z\'s in it.