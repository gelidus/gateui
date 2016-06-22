"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var package_model_1 = require('../package-model');
var input_1 = require('@angular2-material/input/input');
var button_1 = require('@angular2-material/button/button');
var card_1 = require('@angular2-material/card/card');
var icon_1 = require('@angular2-material/icon/icon');
var AddPackageFormComponent = (function () {
    function AddPackageFormComponent() {
        this.packageItem = new package_model_1.PackageModel();
    }
    AddPackageFormComponent.prototype.ngOnInit = function () {
    };
    AddPackageFormComponent.prototype.onSubmit = function () {
        console.log(this.packageItem);
        this.packageItem = new package_model_1.PackageModel();
    };
    AddPackageFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-add-package-form',
            templateUrl: 'add-package-form.component.html',
            styleUrls: ['add-package-form.component.css'],
            directives: [card_1.MdCard, button_1.MdButton, icon_1.MdIcon, input_1.MD_INPUT_DIRECTIVES]
        })
    ], AddPackageFormComponent);
    return AddPackageFormComponent;
}());
exports.AddPackageFormComponent = AddPackageFormComponent;
//# sourceMappingURL=add-package-form.component.js.map