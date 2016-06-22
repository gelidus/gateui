import { Component } from '@angular/core';
import { PortalComponent } from './+portal';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { LandingComponent } from './+landing';
import { AuthService, Role } from './auth.service';
import { TranslateService, TranslatePipe } from "ng2-translate/ng2-translate";

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [TranslatePipe],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
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
      name: 'Dashboard',
      description: 'Something',
      icon: 'dashboard',
      link: 'dashboard'
    },
    {
      name: 'Packages',
      description: 'Something else',
      icon: 'wifi_lock',
      link: 'packages'
    },
    {
      name: 'Configurations',
      description: 'Configurations',
      icon: 'build',
      link: 'configurations'
    }
  ];

  constructor(private _auth:AuthService,
              private _translate:TranslateService,
              private _router:Router) {

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

  redirect(link: string) {
    this._router.navigate(['/portal/',link]);
  }
}
