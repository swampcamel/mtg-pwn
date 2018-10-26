import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { DeckDetailComponent } from './deck-detail/deck-detail.component';
import { AddCardComponent } from './add-card/add-card.component';

import { routing } from './app.routing';
import { CardDetailComponent } from './card-detail/card-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    DeckListComponent,
    DeckDetailComponent,
    AddCardComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(masterFirebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
