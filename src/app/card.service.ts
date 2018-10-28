import { Injectable } from '@angular/core';
import { Card } from './models/card.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CardService {
  keys;
  cardKey;
  mtg: AngularFireList<any>;
  constructor(private database: AngularFireDatabase) {
    this.mtg = database.list('GRN/cards');
    this.keys = this.mtg.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))
    })


  }

  getCards() {
    return this.keys;
  }

  addCard(newCard: Card) {
    console.log(newCard);
    console.log(this.mtg);
    this.mtg.push(newCard);
  }

  getCardById(key) {
    return this.database.object('GRN/cards/'+ key).valueChanges()

  }

  updateCard(localCard, cardKey){
    var entrytoSend = this.database.object('GRN/cards/'+ cardKey)
      entrytoSend.update({name: localCard.name,
        artist: localCard.artist,
        colors: localCard.colors,
        flavor: localCard.flavor,
        id: localCard.id,
        imageUrl: localCard.imageUrl,
        manaCost: localCard.manaCost,
        cmc: localCard.cmc,
        power: localCard.power,
        toughness: localCard.toughness,
        rarity: localCard.rarity,
        text: localCard.text,
        types: localCard.types,
    });
  }
}
