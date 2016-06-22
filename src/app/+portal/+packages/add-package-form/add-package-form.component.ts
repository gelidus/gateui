import { Component, OnInit } from '@angular/core';
import { PackageModel } from '../package-model';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';
import {MdIcon} from '@angular2-material/icon/icon';


@Component({
  moduleId: module.id,
  selector: 'app-add-package-form',
  templateUrl: 'add-package-form.component.html',
  styleUrls: ['add-package-form.component.css'],
  directives: [MdCard, MdButton, MdIcon,MD_INPUT_DIRECTIVES]
})
export class AddPackageFormComponent implements OnInit {
  packageItem: PackageModel;
  constructor() {
    this.packageItem = new PackageModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.packageItem);
    this.packageItem = new PackageModel();
  }

}
