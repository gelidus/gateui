import { Component, OnInit } from '@angular/core';
import {OnActivate, RouteSegment} from "@angular/router";
import {MdIcon} from '@angular2-material/icon/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';

@Component({
  moduleId: module.id,
  selector: 'app-adapter',
  templateUrl: 'adapter.component.html',
  styleUrls: ['adapter.component.css'],
  directives: [MdIcon, MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES],
})
export class AdapterComponent implements OnActivate, OnInit {
  id: number;
  data = [
    {
      id: 1,
      time: new Date(),
      packageName: "156",
      result: "success"
    },
    {
      id: 2,
      time: new Date(),
      packageName: "flow",
      result: "success"
    },
    {
      id: 3,
      time: new Date(),
      packageName: "xxxx",
      result: "fail"
    },
  ];
  constructor() {}

  ngOnInit() {
  }

  routerOnActivate(curr:RouteSegment) {
    this.id = +curr.getParam('id');
  }

  onSend() {
    console.log("adapter send");
  }
}
