// Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /change/; // Change this line
// let result = twinkleStar; // Change this line
// ===================================================================

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

// return [ 'Twinkle', 'twinkle' ];

// Your regex starRegex should use the global flag g
// Your regex starRegex should use the case insensitive flag i
// Your match should match both occurrences of the word "Twinkle"
// Your match result should have two elements in it.