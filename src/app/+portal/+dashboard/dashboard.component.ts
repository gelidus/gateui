import { Component, OnInit } from '@angular/core';
import {MdIcon} from '@angular2-material/icon/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {ItemModel} from '../adapter-model';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [MdIcon, MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES],

})
export class DashboardComponent implements OnInit {
  items: ItemModel[];
  selectedItem: ItemModel;
  constructor() {}

  ngOnInit() {
    // Mockup
    this.items = DATA;
  }

  // Set actual item
  setItem(item:ItemModel) {
    this.selectedItem = item;
  }

  // Redirect to detail view of item
  viewItem() {
    if(!this.selectedItem)
      return;
    console.log(this.selectedItem.id);
  }
}

var DATA:ItemModel [] = [
  {id:1, name: "PC1", ip: "10.0.0.0", sid:"sid1", date: new Date()},
  {id:2, name: "PC2", ip:"", sid:"sid2", date: new Date()},
  {id:42, name: "PC 42 (........)", ip:"192.168.0.1",sid:"42", date: new Date()}
];
