import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../models/deck.model';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() childCardList: Object[];

  constructor() { }

  ngOnInit() {

  }

  addCardToDeck (card) {
    
  }
}
