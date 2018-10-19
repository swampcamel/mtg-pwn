import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() childCardList: Object[];


  childStandardList: Object = this.childCardList;
  // childGuildsList: Object = this.childCardList[1];

  constructor() { }

  ngOnInit() {
      console.log(this.childStandardList);
  }


}
