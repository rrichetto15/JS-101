// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

let obj = {};

statement.split('').forEach(letter => {
  if (letter === ' ') return;
  letter in obj ? obj[letter] += 1 : obj[letter] = 1;
})

console.log(obj);

// Expected Output: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }