// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

// // example crowd gathering
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

// let reCriminals = /./; // Change this line

// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);
// ====================================================

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// return 
// [ 'CCC']


// Your regex should match one criminal ("C") in "C"
// Your regex should match two criminals ("CC") in "CC"
// Your regex should match three criminals ("CCC") in "P1P5P4CCCP2P6P3"
// Your regex should match five criminals ("CCCCC") in "P6P2P7P4P5CCCCCP3P1"
// Your regex should not match any criminals in ""
// Your regex should not match any criminals in "P1P2P3"
// Your regex should match fifty criminals ("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC") in "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".

