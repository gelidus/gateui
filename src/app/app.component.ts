import {Component} from '@angular/core';
import {PortalComponent} from './+portal';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {LandingComponent} from './+landing';

import {AuthService, Role} from './auth.service';
import {TranslateService, TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [TranslatePipe]
})
@Routes([
  {path: '/portal', component: PortalComponent},
  {path: '/landing', component: LandingComponent}
])
export class AppComponent {

  param:string = "world";

  // current role
  role:Role = Role.User;

  routes = [
    {
      name: 'Home',
      description: 'Something',
      icon: 'home'
    },
    {
      name: 'Profile',
      description: 'Something else',
      icon: 'person'
    }
  ];

  constructor(private _auth:AuthService,
              private _translate:TranslateService) {

    this._auth.role.subscribe((r) => {
      this.role = r;
    });

    var userLang = navigator.language.split('-')[0]; // use navigator lang if available

    // this will make default cz if cz od sk is requested, else en will be served
    userLang = /(cz|sk)/gi.test(userLang) ? 'cz' : userLang;
    userLang = /(cz|en)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    this._translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this._translate.use(userLang);
  }

  switchLang() {
    this._translate.use((this._translate.currentLang == 'cz' ? 'en' : 'cz'));
  }

  // menu that should be displayed to the business developers
  bizdevMenu = [];

  // menu that should be displayed to the partners
  partnerMenu = [];
}
