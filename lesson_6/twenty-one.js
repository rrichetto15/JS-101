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

function dealCards(deck) {
  let cardsRemaining = deck.length;
  let cards = [];

  for (let i = 1; i <= CARDS_TO_DEAL; i++) {
    cards.push(deck.splice(Math.floor(Math.random() * cardsRemaining), 1)[0][1]);
    cardsRemaining = deck.length;
  }

  return cards;
}

function displayCards(playerCards, dealerCards) {
  console.log(`Dealer has: ${dealerCards[0]} and ${dealerCards[1]}`);
  console.log(`You have: ${playerCards[0]} and ${playerCards[1]}`);
}





/* ---------------------------------------------------------------- */
/*                             GAMEPLAY                             */
/* ---------------------------------------------------------------- */
let deck = initializeDeck();

let cardsDealt = dealCards(deck);

let playerCards = cardsDealt.slice(0, 2);
let dealerCards = cardsDealt.slice(2, 4);

displayCards(playerCards, dealerCards);