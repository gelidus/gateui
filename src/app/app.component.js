"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _portal_1 = require('./+portal');
var router_1 = require('@angular/router');
var _landing_1 = require('./+landing');
var auth_service_1 = require('./auth.service');
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var AppComponent = (function () {
    function AppComponent(_auth, _translate, _router) {
        var _this = this;
        this._auth = _auth;
        this._translate = _translate;
        this._router = _router;
        this.param = "world";
        // current role
        this.role = auth_service_1.Role.User;
        this.routes = [
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
        this._auth.role.subscribe(function (r) {
            _this.role = r;
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
    AppComponent.prototype.switchLang = function () {
        this._translate.use((this._translate.currentLang == 'cz' ? 'en' : 'cz'));
    };
    AppComponent.prototype.redirect = function (link) {
        this._router.navigate(['/portal/', link]);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            pipes: [ng2_translate_1.TranslatePipe],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/portal', component: _portal_1.PortalComponent },
            { path: '/landing', component: _landing_1.LandingComponent }
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map