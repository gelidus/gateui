"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var icon_1 = require('@angular2-material/icon/icon');
var card_1 = require('@angular2-material/card/card');
var list_1 = require('@angular2-material/list/list');
var router_1 = require('@angular/router');
var DashboardComponent = (function () {
    function DashboardComponent(_router) {
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // Mockup
        this.items = DATA;
    };
    // Set actual item
    DashboardComponent.prototype.setItem = function (item) {
        this.selectedItem = item;
    };
    // Redirect to detail view of item
    DashboardComponent.prototype.viewItem = function () {
        if (!this.selectedItem)
            return;
        console.log(this.selectedItem.id);
        this._router.navigate(['/portal/adapter/', this.selectedItem.id]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            directives: [icon_1.MdIcon, card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
var DATA = [
    { id: 1, name: "PC1", ip: "10.0.0.0", sid: "sid1", date: new Date(), qrcode: "http://www.qrstuff.com/images/sample.png" },
    { id: 2, name: "PC2", ip: "", sid: "sid2", date: new Date(), qrcode: "http://www.qrstuff.com/images/sample.png" },
    { id: 42, name: "PC 42 (........)", ip: "192.168.0.1", sid: "42", date: new Date(), qrcode: "http://www.qrstuff.com/images/sample.png" }
];
//# sourceMappingURL=dashboard.component.js.map