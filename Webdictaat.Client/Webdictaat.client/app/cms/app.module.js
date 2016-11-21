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
//external libraries
var ng2_ckeditor_1 = require('ng2-ckeditor');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
//modules
var questions_module_1 = require('../questions/questions.module');
var pages_module_1 = require('../pages/pages.module');
var tools_module_1 = require('../tools/tools.module');
//components
var app_component_1 = require('./app.component');
var add_dictaat_component_1 = require('../dictaten/add-dictaat.component');
var dictaten_component_1 = require('../dictaten/dictaten.component');
var file_preview_component_1 = require('../file-preview/file-preview.component');
var dialog_component_1 = require('../dialog/dialog.component');
var dictaat_component_1 = require('../dictaat/dictaat.component');
var common_1 = require('@angular/common');
var edit_page_component_1 = require('../pages/edit-page.component');
//services
var app_routing_1 = require('./app.routing');
var dialog_service_1 = require('../services/dialog.service');
var file_preview_service_1 = require('../services/file-preview.service');
var question_service_1 = require('../services/question.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_dragula_1.DragulaModule, tools_module_1.ToolsModule, questions_module_1.QuestionsModule,
                platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, pages_module_1.PagesModule, forms_1.FormsModule, ng2_ckeditor_1.CKEditorModule
            ],
            declarations: [
                add_dictaat_component_1.AddDictaatComponent, dialog_component_1.DialogComponent,
                app_component_1.AppComponent, dictaten_component_1.DictatenComponent, file_preview_component_1.FilePreviewComponent, dictaat_component_1.DictaatComponent, edit_page_component_1.EditPageComponent
            ],
            providers: [
                file_preview_service_1.FilePreviewService, dialog_service_1.DialogService, question_service_1.QuestionsService,
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