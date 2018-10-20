import { Injectable } from '@angular/core';
import { Card } from './models/card.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class CardService {
  mtg: AngularFireList<any[]>
  constructor(private database: AngularFireDatabase) {
  this.mtg = database.list('mtg-test-29e1e') }

  getCards() {
    return this.mtg;
  }
}
