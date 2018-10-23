import { Injectable } from '@angular/core';
import { Card } from './models/card.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class CardService {
  mtg: AngularFireList<any>;
  constructor(private database: AngularFireDatabase) {
  this.mtg = database.list('GRN');

 }

  getCards() {
    return this.database.list('GRN');
  }

  }
