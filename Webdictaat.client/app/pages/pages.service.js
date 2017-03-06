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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var wdapi_service_1 = require("../core/wdapi.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var PagesService = (function () {
    function PagesService(wdapi) {
        this.wdapi = wdapi;
    }
    PagesService.prototype.getPages = function (dictaatName) {
        return this.wdapi.get("/dictaten/" + dictaatName + "/pages")
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.addPage = function (dictaatName, page, menuName) {
        var data = {
            page: page,
            subMenu: menuName
        };
        var url = "/dictaten/" + dictaatName + '/pages';
        return this.wdapi.post(url, data)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.editPage = function (dictaatName, page) {
        var url = "/dictaten/" + dictaatName + '/pages/' + page.name;
        return this.wdapi.put(url, page)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.getPage = function (dictaatName, pageName) {
        var url = "/dictaten/" + dictaatName + '/pages/' + pageName;
        return this.wdapi.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.deletePage = function (dictaatName, pageName) {
        var url = "/dictaten/" + dictaatName + '/pages' + pageName;
        return this.wdapi.delete(url)
            .toPromise()
            .then(function (response) { return response; });
    };
    return PagesService;
}());
PagesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [wdapi_service_1.wdApi])
], PagesService);
exports.PagesService = PagesService;
//# sourceMappingURL=pages.service.js.map