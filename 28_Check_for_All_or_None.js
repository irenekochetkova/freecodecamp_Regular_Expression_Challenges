// You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
// -----------------------------------------------------------------
// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

// let favWord = "favorite";
// let favRegex = /change/; // Change this line
// let result = favRegex.test(favWord);
// ================================================================

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

// return true;