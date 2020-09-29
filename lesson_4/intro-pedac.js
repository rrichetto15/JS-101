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
- declare a result variable and initialize it to an empty array
- create an array named substrArray that contains all of the
  substrings of the input string that are at least 2 characters long.
- loop through the words in the substrArray array.
- if the word is a palindrome, append it to the result
  array
- return the result array







*/