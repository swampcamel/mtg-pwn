import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mtg-test';
  magic = require('./AllSets.json');
  guildsSet = this.magic.GRN;
  standardSet = this.magic.M19;
  combinedSet = [this.guildsSet, this.standardSet];
  ngOnInit() {
    console.log(this.guildsSet);
  }
  addCard(newCard: Card) {
    this.guildsSet.cards.unshift(newCard);
  }
}
