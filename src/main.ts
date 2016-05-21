import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AffilAppComponent, environment } from './app/';
import { AuthService } from './app/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AffilAppComponent, [HTTP_PROVIDERS, AuthService]);
