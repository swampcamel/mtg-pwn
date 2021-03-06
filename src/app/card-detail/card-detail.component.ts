import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../models/card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  providers: [CardService]
})

export class CardDetailComponent implements OnInit {
  cardId: string;
  cardToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cardService: CardService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cardId = urlParameters['key'];
      this.cardService.getCardById(this.cardId).subscribe(data => {
        this.cardToDisplay = data;
      });
    });
  }
  sendUpdate() {
    this.cardService.updateCard(this.cardToDisplay, this.cardId);
  }
}
