import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mtg-test';
  magic = require('./AllSets.json');
  guildsSet = this.magic.GRN;
  standardSet = this.magic.M19;
  combinedSet = [this.guildsSet, this.standardSet];
  ngOnInit() {
    console.log(this.guildsSet);
  }
}
