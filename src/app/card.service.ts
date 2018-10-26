import { Injectable } from '@angular/core';
import { Card } from './models/card.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class CardService {
  mtg: AngularFireList<any>;
  constructor(private database: AngularFireDatabase) {
  this.mtg = database.list('GRN/cards');

 }

  getCards() {
    return this.mtg;
  }

  addCard(newCard: Card) {
    console.log(newCard);
    console.log(this.mtg);
    this.mtg.push(newCard);
  }

  getCardById(cardName: string) {
    // this.mtg.find(function(card) {
    //   return card
    // });
  }
  }
