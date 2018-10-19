import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mtg-test';
  magic = require('./AllSets.json');
  ngOnInit() {
    console.log(this.magic);
  }
}
