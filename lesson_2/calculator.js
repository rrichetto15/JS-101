const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = readline.question();
  }
  
  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = readline.question();
  }
  
  prompt(MESSAGES['operation']);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  
  prompt(`The result is: ${output}`);

  prompt(MESSAGES['anotherOperation']);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}