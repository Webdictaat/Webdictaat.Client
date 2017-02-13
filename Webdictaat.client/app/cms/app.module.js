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
var forms_1 = require('@angular/forms');
//modules
var questions_module_1 = require('../questions/questions.module');
var images_module_1 = require('../images/images.module');
var pages_module_1 = require('../pages/pages.module');
var tools_module_1 = require('../tools/tools.module');
//components
var add_rating_component_1 = require('../rating/add-rating.component');
var app_component_1 = require('./app.component');
var add_dictaat_component_1 = require('../dictaten/add-dictaat.component');
var dictaten_component_1 = require('../dictaten/dictaten.component');
var dialog_component_1 = require('../dialog/dialog.component');
var dictaat_component_1 = require('../dictaat/dictaat.component');
var common_1 = require('@angular/common');
var edit_page_component_1 = require('../pages/edit-page.component');
var avatar_component_1 = require('../avatar/avatar.component');
//services
var app_routing_1 = require('./app.routing');
var dialog_service_1 = require('../services/dialog.service');
var question_service_1 = require('../services/question.service');
var rating_service_1 = require('../services/rating.service');
var images_service_1 = require('../services/images.service');
var account_service_1 = require('../services/account.service');
var wdapi_service_1 = require('../core/wdapi.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                tools_module_1.ToolsModule, questions_module_1.QuestionsModule, images_module_1.ImagesModule,
                platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, pages_module_1.PagesModule, forms_1.FormsModule
            ],
            declarations: [
                add_dictaat_component_1.AddDictaatComponent, dialog_component_1.DialogComponent, avatar_component_1.AvatarComponent, add_rating_component_1.AddRatingComponent,
                app_component_1.AppComponent, dictaten_component_1.DictatenComponent, dictaat_component_1.DictaatComponent, edit_page_component_1.EditPageComponent
            ],
            providers: [
                dialog_service_1.DialogService, question_service_1.QuestionsService, images_service_1.ImageService, account_service_1.AccountService, wdapi_service_1.wdApi,
                rating_service_1.RatingService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map