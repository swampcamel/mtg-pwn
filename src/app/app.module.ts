import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { DeckListComponent } from './deck-list/deck-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    DeckListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
