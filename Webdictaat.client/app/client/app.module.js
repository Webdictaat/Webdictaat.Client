"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
//components
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var page_component_1 = require('../page/page.component');
var html_outlet_directive_1 = require('../core/html-outlet.directive');
var nav_menu_component_1 = require('../nav-menu/nav-menu.component');
var avatar_component_1 = require('../avatar/avatar.component');
var question_service_1 = require('../services/question.service');
var account_service_1 = require('../services/account.service');
var rating_service_1 = require('../services/rating.service');
var wdapi_service_1 = require('../core/wdapi.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [html_outlet_directive_1.HtmlOutlet, app_component_1.AppComponent, page_component_1.PageComponent, nav_menu_component_1.NavMenuComponent, avatar_component_1.AvatarComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                question_service_1.QuestionsService, account_service_1.AccountService, rating_service_1.RatingService, wdapi_service_1.wdApi
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map