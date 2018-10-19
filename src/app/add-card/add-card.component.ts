import { Component, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {
  @Output() sendCard = new EventEmitter();

  enterCard(artist: string, cmc: number, colors: string, flavor: string, id: string, imageUrl: string, manaCost: string, name: string, power: number, rarity: string, text: string, toughness: number, types: string) {
    let newCard: Card = new Card(artist, cmc, colors, flavor, id, imageUrl, manaCost, name, power, rarity, text, toughness, types);
    this.sendCard.emit(newCard);
  }
}
