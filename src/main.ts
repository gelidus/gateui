import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';

import { AuthService } from './app/auth.service';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  AuthService,
  provide(PLATFORM_DIRECTIVES, {
    useValue: [
      MdToolbar, MdButton, MD_SIDENAV_DIRECTIVES,
      MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdInput,
      MdCheckbox, MdRadioButton, MdRadioGroup,
      MdIcon
    ], multi: true
  }),
  MdIconRegistry, MdRadioDispatcher
]);
