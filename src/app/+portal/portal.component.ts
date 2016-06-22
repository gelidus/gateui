import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { DashboardComponent } from './+dashboard';
import { PackagesComponent } from './+packages';
import { AdapterComponent } from './+adapter';

@Component({
  moduleId: module.id,
  selector: 'app-portal',
  templateUrl: 'portal.component.html',
  styleUrls: ['portal.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/packages', component: PackagesComponent},
  {path: '/adapter/:id', component: AdapterComponent }
])
export class PortalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
