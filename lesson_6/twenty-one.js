const readline = require('readline-sync');

const WINNING_VALUE = 21;

function prompt(message) {
  console.log(`=> ${message}`);
}





/* ---------------------------------------------------------------- */
/*                            GAME LOGIC                            */
/* ---------------------------------------------------------------- */
function initializeDeck() {
  let deck = [];

  let suits = ['H', 'D', 'C', 'S'];
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  suits.forEach(suit => {
    values.forEach(value => {
      deck.push([suit, value])
    })
  })

  return deck;
}

function dealCard(deck) {
  let cardsRemaining = deck.length;
  let card = [];

  card.push(deck.splice(Math.floor(Math.random() * cardsRemaining), 1)[0][1]);

  return card;
}

function displayCards(playerCards, dealerCards) {
  prompt(`Dealer has: ${joinAnd(dealerCards)} => [ Total: ${getTotal(dealerCards)} ]`);
  prompt(`You have: ${joinAnd(playerCards)} => [ Total: ${getTotal(playerCards)} ]`);
}

function getTotal(cards) {
  let sum = 0;

  cards.forEach(value => {
    if (value[0] === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value[0])) {
      sum += 10;
    } else {
      sum += Number(value[0]);
    }
  });

  // correct for Aces
  cards.filter(value => value[0] === 'A').forEach(_ => {
    if (sum > WINNING_VALUE) sum -= 10;
  });

  return sum;
}

function busted(total) {
  if (total > WINNING_VALUE) {
    return true;
  }
}

function displayWinner(playerTotal, dealerTotal) {
  if (playerTotal > 21) {
    prompt(`--- You busted. Dealer Wins. ---`);
  } else if (dealerTotal > 21) {
    prompt(`--- Dealer busted. You Win. ---`);
  } else if (playerTotal > dealerTotal) {
    prompt('--- Player Wins! ---');
  } else if (playerTotal < dealerTotal) {
    prompt('--- Dealer Wins! ---');
  } else {
    prompt('--- Tie Game! ---')
  }
}

function joinAnd(arr, delimiter = ', ', finalDelimiter = 'and') {
  let joined = '';

  arr.forEach((num, index) => {
    if (!(index === arr.length - 1)) {
      joined += `${String(num)}${delimiter}`;
    } else {
      joined += `${finalDelimiter} ${String(num)}`;
    }
  })

  return joined;
}



/* ---------------------------------------------------------------- */
/*                             GAMEPLAY                             */
/* ---------------------------------------------------------------- */
let deck = initializeDeck();

let playerCards = [dealCard(deck), dealCard(deck)];
let dealerCards = [dealCard(deck), dealCard(deck)];

displayCards(playerCards, dealerCards);

while (true) {
  let answer = '';

  while (true) {
    prompt('Hit (h) or Stay (s)?');
    answer = readline.question().toLowerCase();
  
    if (['h', 's'].includes(answer)) break;
    prompt(`Please enter either 'h' or 's`);
  }
  
  if (answer === 'h') {
    playerCards.push(dealCard(deck));
    displayCards(playerCards, dealerCards);
  }

  if (answer === 's' || busted(getTotal(playerCards))) break;
}

if (busted(getTotal(playerCards))) {
  displayWinner(getTotal(playerCards), getTotal(dealerCards));
  return -1;
} else {
  console.log(`You chose to stay. Total = ${getTotal(playerCards)}`);
}

prompt(`Dealer's turn...`);

while (getTotal(dealerCards) < 17) {

  dealerCards.push(dealCard(deck));
  displayCards(playerCards, dealerCards);
}

if (busted(getTotal(dealerCards)))  {
  console.log(`The dealer busted. Total = ${getTotal(playerCards)}`)
}

prompt(`*** FINAL RESULTS ***`);
displayCards(playerCards, dealerCards);


displayWinner(getTotal(playerCards), getTotal(dealerCards));