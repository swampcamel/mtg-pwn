import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck.model';
import { Card } from '../models/card.model';
import { CardService } from '../card.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [CardService]
})
export class CardListComponent implements OnInit {
  childCardList: AngularFireList<any[]>;
  constructor(  private cardService: CardService ) { }

  ngOnInit() {
    this.childCardList = this.cardService.getCards();
    console.log(this.childCardList);
  }

  addCardToDeck (card) {

  }
}
