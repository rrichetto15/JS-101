const readline = require('readline-sync');

const CARDS_TO_DEAL = 4;

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
  console.log(`Dealer has: ${dealerCards[0]} and ${dealerCards[1]} => [ Total: ${getTotal(dealerCards)} ]`);
  console.log(`You have: ${joinAnd(playerCards)} => [ Total: ${getTotal(playerCards)} ]`);
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
    if (sum > 21) sum -= 10;
  });

  return sum;
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
getTotal(playerCards);

while (true) {
  prompt('Hit (h) or Stay (s)?');
  let answer = readline.question();
  if (answer === 's') break;

  playerCards.push(dealCard(deck));
  displayCards(playerCards, dealerCards);
}
