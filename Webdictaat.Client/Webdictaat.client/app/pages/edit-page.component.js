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
var router_1 = require('@angular/router');
var pages_service_1 = require('./pages.service');
var EditPageComponent = (function () {
    function EditPageComponent(route, pagesService) {
        this.route = route;
        this.pagesService = pagesService;
    }
    EditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var name = params['pageName'];
            _this.dictaatName = params['dictaatName'];
            _this.pagesService.getPage(_this.dictaatName, name)
                .then(function (page) {
                _this.page = page;
            });
        });
    };
    EditPageComponent.prototype.savePage = function () {
        var _this = this;
        this.pagesService.editPage(this.dictaatName, this.page)
            .then(function (page) { return _this.page = page; });
    };
    EditPageComponent.prototype.updateSource = function (pageSource) {
        this.page.source = pageSource;
        this.savePage();
    };
    EditPageComponent = __decorate([
        core_1.Component({
            selector: "wd-edit-page",
            templateUrl: "http://localhost:3000/app/pages/edit-page.component.html",
            providers: [pages_service_1.PagesService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pages_service_1.PagesService])
    ], EditPageComponent);
    return EditPageComponent;
}());
exports.EditPageComponent = EditPageComponent;
//# sourceMappingURL=edit-page.component.js.map