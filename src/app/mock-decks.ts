import { Deck } from './models/deck.model';

export function makeDecks() {
  const masterList = require('./AllSets.json');

  const deckCol = [];

  const demoDeck1 = new Deck("Demo Deck 1");

  for (let i = 0; i < 40; i++) {
    demoDeck1.cardList.push( masterList.GRN.cards[i]);
  }

  deckCol.push(demoDeck1);

  return deckCol;
}
