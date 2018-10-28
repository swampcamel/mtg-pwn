import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck.model';
import { Card } from '../models/card.model';
import { CardService } from '../card.service';
import { Router } from '@angular/router'
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
  constructor(private router: Router,  private cardService: CardService ) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(data => {
      this.childCardList = data;
      this.childCardList.forEach(function(card, i) {
        card.index = i;
      })
    })
  }

  goToDetailPage(card) {
    this.router.navigate(['cards', card.key]);
  }
  deleteCard(key) {
    if(confirm("Are you sure you want to delete this item from the database?")){
      this.cardService.deleteEntry(key);
    }
  }
}
