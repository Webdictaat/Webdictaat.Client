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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var PagesService = (function () {
    function PagesService(http) {
        this.http = http;
        this.dictatenUrl = 'http://localhost:65418/api/dictaten/';
    }
    PagesService.prototype.getPages = function (dictaatName) {
        var url = this.dictatenUrl + dictaatName + '/pages';
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    PagesService.prototype.addPage = function (dictaatName, page, menuName) {
        var data = {
            page: page,
            subMenu: menuName
        };
        var url = this.dictatenUrl + dictaatName + '/pages';
        return this.http.post(url, data)
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    PagesService.prototype.editPage = function (dictaatName, page) {
        var url = this.dictatenUrl + dictaatName + '/pages/' + page.name;
        return this.http.put(url, page)
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    PagesService.prototype.getPage = function (dictaatName, pageName) {
        var url = this.dictatenUrl + dictaatName + '/pages/' + pageName;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    PagesService.prototype.deletePage = function (dictaatName, pageName) {
        var url = this.dictatenUrl + dictaatName + '/pages/' + pageName;
        return this.http.delete(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    PagesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PagesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PagesService);
    return PagesService;
}());
exports.PagesService = PagesService;
//# sourceMappingURL=pages.service.js.map