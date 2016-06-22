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
var AdapterComponent = (function () {
    function AdapterComponent() {
        this.data = [
            {
                id: 1,
                time: new Date(),
                packageName: "156",
                result: "success"
            },
            {
                id: 2,
                time: new Date(),
                packageName: "flow",
                result: "success"
            },
            {
                id: 3,
                time: new Date(),
                packageName: "xxxx",
                result: "fail"
            },
        ];
    }
    AdapterComponent.prototype.ngOnInit = function () {
        // MOCK
        this.adapter = { id: this.id, name: "test", ip: "192.168.1.1", sid: "#123", date: new Date(),
            qrcode: "http://www.qrstuff.com/images/sample.png" };
    };
    AdapterComponent.prototype.routerOnActivate = function (curr) {
        this.id = +curr.getParam('id');
    };
    AdapterComponent.prototype.onSend = function () {
        console.log(this.packageName);
        this.packageName = "";
    };
    AdapterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-adapter',
            templateUrl: 'adapter.component.html',
            styleUrls: ['adapter.component.css'],
            directives: [icon_1.MdIcon, card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES]
        })
    ], AdapterComponent);
    return AdapterComponent;
}());
exports.AdapterComponent = AdapterComponent;
//# sourceMappingURL=adapter.component.js.map