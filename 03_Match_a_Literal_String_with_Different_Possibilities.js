// Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".

// let petString = "James has a pet cat.";
// let petRegex = /change/; // Change this line
// let result = petRegex.test(petString);
// =======================================================

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

// return true;

// let petString = "James fish has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; //find the first coincidence
// let result = petString.match(petRegex);

// return
// [ 'fish'] 
