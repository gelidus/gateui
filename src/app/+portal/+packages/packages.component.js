"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var add_package_form_component_1 = require('./add-package-form/add-package-form.component');
var PackagesComponent = (function () {
    function PackagesComponent() {
    }
    PackagesComponent.prototype.ngOnInit = function () {
        this.packages = DATA;
    };
    PackagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-packages',
            templateUrl: 'packages.component.html',
            styleUrls: ['packages.component.css'],
            directives: [add_package_form_component_1.AddPackageFormComponent]
        })
    ], PackagesComponent);
    return PackagesComponent;
}());
exports.PackagesComponent = PackagesComponent;
var DATA = [
    { id: 1, name: "Name 1", version: "0.1", path: "/dev", purpose: "wut" },
    { id: 2, name: "Name 2", version: "1.1", path: "/urand", purpose: "wutx" },
    { id: 3, name: "Name 3", version: "0.1b", path: "/bin", purpose: "wut42" },
];
//# sourceMappingURL=packages.component.js.map