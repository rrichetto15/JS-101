const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' || Number(number) < 0 || Number.isNaN(Number(number));
}

while (true) {
  prompt('Enter loan amount:');
  let amount = readline.question();
  
  while (isInvalidNumber(amount)) {
    prompt('Please enter a positive number');
    amount = readline.question();
  }
  
  prompt('Enter Annual Percentage Rate (APR):');
  let interestRate = readline.question();
  
  while (isInvalidNumber(interestRate)) {
    prompt('Please enter a positive number');
    interestRate = readline.question();
  }
  
  prompt('Enter loan duration (in years):');
  let years = readline.question();
  
  while (isInvalidNumber(years)) {
    prompt('Please enter a positive number');
    years = readline.question();
  }
  
  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;
  
  let monthlyPayment = Number(amount) * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));
  
  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to do another calculation?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}