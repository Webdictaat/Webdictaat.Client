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
//custom modules
var html_outlet_directive_1 = require('../core/html-outlet.directive');
//components
var html_component_1 = require('./html.component');
var header_component_1 = require('./default-tools/header.component');
var text_component_1 = require('./default-tools/text.component');
var column_component_1 = require('./default-tools/column.component');
var multiple_choice_component_1 = require('./game-tools/multiple-choice.component');
var rating_component_1 = require('./game-tools/rating.component');
var trash_component_1 = require('./default-tools/trash.component');
var img_component_1 = require('./default-tools/img.component');
var ToolsModule = (function () {
    function ToolsModule() {
    }
    ToolsModule = __decorate([
        core_1.NgModule({
            declarations: [
                html_outlet_directive_1.HtmlOutlet, column_component_1.ColumnComponent, text_component_1.TextComponent, header_component_1.HeaderComponent, html_component_1.HtmlComponent,
                multiple_choice_component_1.MultipleChoiceToolComponent, trash_component_1.TrashComponent, img_component_1.ImgComponent, rating_component_1.RatingToolComponent
            ],
            exports: [column_component_1.ColumnComponent, text_component_1.TextComponent, header_component_1.HeaderComponent, html_component_1.HtmlComponent,
                multiple_choice_component_1.MultipleChoiceToolComponent, html_outlet_directive_1.HtmlOutlet, trash_component_1.TrashComponent, img_component_1.ImgComponent, rating_component_1.RatingToolComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolsModule);
    return ToolsModule;
}());
exports.ToolsModule = ToolsModule;
//# sourceMappingURL=tools.module.js.map