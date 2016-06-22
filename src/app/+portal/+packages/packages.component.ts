import { Component, OnInit } from '@angular/core';
import { PackageModel } from './package-model';
import { AddPackageFormComponent } from './add-package-form/add-package-form.component';
@Component({
  moduleId: module.id,
  selector: 'app-packages',
  templateUrl: 'packages.component.html',
  styleUrls: ['packages.component.css'],
  directives: [AddPackageFormComponent]
})
export class PackagesComponent implements OnInit {
  packages: PackageModel[];
  constructor() {}

  ngOnInit() {
    this.packages = DATA;
  }
}

var DATA:PackageModel[] = [
  {id: 1, name:"Name 1", version: "0.1", path:"/dev", purpose:"wut"},
  {id: 2, name:"Name 2", version: "1.1", path:"/urand", purpose:"wutx"},
  {id: 3, name:"Name 3", version: "0.1b", path:"/bin", purpose:"wut42"},
];
