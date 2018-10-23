import { Injectable } from '@angular/core';
import { Card } from './models/card.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class CardService {
  mtg: Observable<any>;
  constructor(private database: AngularFireDatabase) {
  this.mtg = database.list('GRN').valueChanges();

 }

  getCards() {
  this.mtg.subscribe(data => {
    console.log(data);
    return data;
  });

  }
}
