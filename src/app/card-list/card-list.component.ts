import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() childCardList: Object[];

  constructor() { }

  ngOnInit() {

  }


}
