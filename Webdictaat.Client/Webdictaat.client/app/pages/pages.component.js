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
var pages_service_1 = require('./pages.service');
var dictaat_1 = require('../models/dictaat');
var file_preview_service_1 = require('../services/file-preview.service');
var router_1 = require('@angular/router');
var PagesComponent = (function () {
    function PagesComponent(pagesSevice, filePreviewService, router) {
        this.pagesSevice = pagesSevice;
        this.filePreviewService = filePreviewService;
        this.router = router;
    }
    PagesComponent.prototype.selectPage = function (page) {
        this.filePreviewService.selectFile(this.dictaat.name, page);
    };
    PagesComponent.prototype.getPages = function () {
        var _this = this;
        this.pagesSevice.getPages(this.dictaat.name)
            .then(function (pages) { return _this.dictaat.pages = pages; });
    };
    PagesComponent.prototype.deletePage = function (page) {
        var _this = this;
        this.pagesSevice.deletePage(this.dictaat.name, page.name)
            .then(function () { return _this.getPages(); });
    };
    PagesComponent.prototype.editPage = function (page) {
        this.router.navigateByUrl("/dictaten/" + this.dictaat.name + "/pages/" + page.name);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dictaat_1.Dictaat)
    ], PagesComponent.prototype, "dictaat", void 0);
    PagesComponent = __decorate([
        core_1.Component({
            selector: "wd-pages",
            templateUrl: "./app/pages/pages.component.html",
            providers: [pages_service_1.PagesService]
        }), 
        __metadata('design:paramtypes', [pages_service_1.PagesService, file_preview_service_1.FilePreviewService, router_1.Router])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map