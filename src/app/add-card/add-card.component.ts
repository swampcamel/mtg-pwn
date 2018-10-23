import { Component, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
  providers: [CardService]
})
export class AddCardComponent {

  constructor(private cardService: CardService) { };

  ngOnInit() { };

  enterCard(artist: string, cmc: number, colors: string, flavor: string, id: string, imageUrl: string, manaCost: string, name: string, power: number, rarity: string, text: string, toughness: number, types: string) {
    let newCard: Card = new Card(artist, cmc, colors, flavor, id, imageUrl, manaCost, name, power, rarity, text, toughness, types);
    this.cardService.addCard(newCard);
  }
}
