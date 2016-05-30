import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { PortalComponent } from './+portal';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { LandingComponent } from './+landing';

import { AuthService, Role } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MdToolbar,
    MdIcon,
    MdButton,
    MD_SIDENAV_DIRECTIVES
  ],
  providers: [
    MdIconRegistry
  ]
})
@Routes([
  {path: '/portal', component: PortalComponent},
  {path: '/landing', component: LandingComponent}
])
export class AppComponent {
  
  // current role
  role:Role = Role.User;
  
  constructor(private _auth:AuthService) {
       this._auth.role.subscribe(
         (r) => { this.role = r; }
       )
  }
  
  // menu that should be displayed to the business developers
  bizdevMenu = [
    
  ];
  
  // menu that should be displayed to the partners
  partnerMenu = [
    
  ];
}
