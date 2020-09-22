let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function sentenceCase(str) {
 let firstLetter = str.split('')[0].toUpperCase();
 let restofSentance = str.split('').slice(1).join('').toLowerCase();

 return firstLetter + restofSentance;
}

console.log(sentenceCase(munstersDescription));


/*
START

  GIVEN a string

  GET firstLetter
  GET rest of sentance

  SET firstLetter = uppercase
  CONCATINATE firstLetter + rest of sentance

  PRINT fullSentance

END
*/