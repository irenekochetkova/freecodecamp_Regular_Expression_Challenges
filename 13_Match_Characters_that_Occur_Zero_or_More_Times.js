// Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your regex does not need flags, and it should not match any of the other quotes.

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /change/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// ===============================================================
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

// return 
// [ 'Aaaaaaaaaaaaaaaa',
//   index: 0,
//   input: 'Aaaaaaaaaaaaaaaarrrgh!',
//   groups: undefined ]