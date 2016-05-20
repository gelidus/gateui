import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';

import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'affil-app',
  templateUrl: 'affil.component.html',
  styleUrls: ['affil.component.css'],
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
export class AffilAppComponent {
  
  constructor() {
    
  }
  
  // menu that should be displayed to the business developers
  bizdevMenu = [
    
  ];
  
  // menu that should be displayed to the partners
  partnerMenu = [
    
  ];
}
