import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck.model';
import { Card } from '../models/card.model';
import { CardService } from '../card.service';
import { Observable } from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [CardService]
})
export class CardListComponent implements OnInit {
  childCardList;
  constructor(  private cardService: CardService ) { }

  ngOnInit() {
    this.cardService.getCards().valueChanges().subscribe(data => {
      this.childCardList = data[2];
      console.log(this.childCardList);
    })
  }

  addCardToDeck (card) {

  }
}
