import { Component, OnInit } from '@angular/core';
import { makeDecks } from '../mock-decks';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {
  deckList = makeDecks();
  
  constructor() { }

  ngOnInit() {

  }

}
