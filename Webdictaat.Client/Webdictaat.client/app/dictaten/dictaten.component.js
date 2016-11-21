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
var dictaten_service_1 = require('./dictaten.service');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var DictatenComponent = (function () {
    function DictatenComponent(dictatenService, httpService, router) {
        this.dictatenService = dictatenService;
        this.httpService = httpService;
        this.router = router;
    }
    DictatenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dictatenService.getDictaten()
            .then(function (dictaten) {
            return _this.dictaten = dictaten;
        });
    };
    DictatenComponent.prototype.setDictaten = function (dictaten) {
        this.dictaten = dictaten;
    };
    DictatenComponent.prototype.gotoDetail = function (dictaat) {
        var link = ['/dictaten', dictaat.name];
        this.router.navigate(link);
    };
    DictatenComponent = __decorate([
        core_1.Component({
            selector: "wd-dictaten",
            templateUrl: "./app/dictaten/dictaten.component.html",
            styleUrls: ["./app/dictaten/dictaten.component.css"],
            providers: [dictaten_service_1.DictatenService]
        }), 
        __metadata('design:paramtypes', [dictaten_service_1.DictatenService, http_1.Http, router_1.Router])
    ], DictatenComponent);
    return DictatenComponent;
}());
exports.DictatenComponent = DictatenComponent;
//# sourceMappingURL=dictaten.component.js.map