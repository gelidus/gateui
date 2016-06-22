"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var _1 = require('./app/');
var auth_service_1 = require('./app/auth.service');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var ng2_translate_2 = require("ng2-translate/ng2-translate");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    auth_service_1.AuthService,
    core_1.provide(core_1.PLATFORM_DIRECTIVES, {
        useValue: [
            toolbar_1.MdToolbar, button_1.MdButton, sidenav_1.MD_SIDENAV_DIRECTIVES,
            list_1.MD_LIST_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, input_1.MdInput,
            checkbox_1.MdCheckbox, radio_1.MdRadioButton, radio_1.MdRadioGroup,
            icon_1.MdIcon
        ], multi: true
    }),
    icon_1.MdIconRegistry, radio_1.MdRadioDispatcher,
    core_1.provide(ng2_translate_2.TranslateLoader, {
        useFactory: function (http) { return new ng2_translate_2.TranslateStaticLoader(http, 'translations', '.json'); },
        deps: [http_2.Http]
    }),
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    ng2_translate_1.TranslateService
]);
//# sourceMappingURL=main.js.map