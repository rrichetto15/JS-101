const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const score = {
  player: 0,
  computer: 0
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win this round!');
  } else if (choice === computerChoice) {
    prompt("It's a tie.");
  } else {
    prompt("Computer wins this round.");
  }
}

function updateScore(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    score.player += 1;
  } else if (choice === computerChoice) {
    score.player += 0;
  } else {
    score.computer += 1;
  }
}

function displayScore() {
  if (score.player < 3 && score.computer < 3) {
    prompt(`The current score is: Player (${score.player}), Computer (${score.computer})`);
  } else {
    prompt('GAME OVER');
    prompt(`The FINAL SCORE is: Player (${score.player}), Computer (${score.computer})`);
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  updateScore(choice, computerChoice);

  displayScore();

  if (score.player >= 3 || score.computer >= 3) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] === 'y') {
      score.player = 0;
      score.computer = 0;
    } else {
      break;
    }
  }
}