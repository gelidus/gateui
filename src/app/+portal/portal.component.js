"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var _dashboard_1 = require('./+dashboard');
var _packages_1 = require('./+packages');
var _adapter_1 = require('./+adapter');
var PortalComponent = (function () {
    function PortalComponent() {
    }
    PortalComponent.prototype.ngOnInit = function () {
    };
    PortalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-portal',
            templateUrl: 'portal.component.html',
            styleUrls: ['portal.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/dashboard', component: _dashboard_1.DashboardComponent },
            { path: '/packages', component: _packages_1.PackagesComponent },
            { path: '/adapter/:id', component: _adapter_1.AdapterComponent }
        ])
    ], PortalComponent);
    return PortalComponent;
}());
exports.PortalComponent = PortalComponent;
//# sourceMappingURL=portal.component.js.map