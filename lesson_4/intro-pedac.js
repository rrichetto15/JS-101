/*
PROBLEM:

Given a string, write a function `palindromeSubstrings` which returns
all the substrings from a given string which are palindromes. Consider
palindrome words case sensitive.



----------------------------
 E - Examples / Test Cases
----------------------------

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"))
should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"))
should log: []

console.log(palindromeSubstrings("")) == []
should log: []



----------------------------
 P - Understand the Problem
----------------------------
 
ASK QUESTIONS
1. What is a substring?
2. What is a palindrome?
3. Will inputs always be strings?
4. What does it mean to treat palindrome words case-sensitively?

WRITE DOWN: the input, output, and requirements (both explicit and implicit)
input: string
output: an array of substrings
rules:
     Explicit requirements:
       - return only substrings which are palindromes.
       - palindrome words should be case sensitive, meaning "abBA"
         is not a palindrome.

     Implicit requirements:
       - if the string is an empty string, the result should be an empty array



---------------------------------
 DA - Data Structure & Algorithm
---------------------------------

DATA STRUCTURE:
Array

ALGORITHM:
substrings function
=================
  - create an empty array called `result` that will contain all required substrings
  - create a `startingIndex` variable (value `0`) for the starting index of a substring
  - start a loop that iterates over `startingIndex` from `0` to the length of the string minus 2
    - create a `numChars` variable (value `2`) for the length of a substring
    - start an inner loop that iterates over `numChars` from `2` to `string.length - startingIndex`
      - extract a substring of length `numChars` from `string` starting at `startingIndex`
      - append the extracted substring to the `result` array
      - increment the `numChars` variable by `1`
    - end the inner loop
    - increment the `startingIndex` variable by `1`
  - end the outer loop
  - return the `result` array

isPalindrome function
=====================
  - Inside the `isPalindrome` function, check whether the string
    value is equal to its reversed value.

palindromeSubstrings function
============================
  - declare a `result` variable and initialize it to an empty array
  - create an array named `substrArray` that will contain all of the
    substrings of the input string that are at least 2 characters long.
  - loop through the words in the `substrArray` array.
    - if the word is a palindrome, append it to the `result` array
  - return the `result` array


------------------
 C - CODE (below)
------------------

*/

function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}

function isPalidrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalidrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []