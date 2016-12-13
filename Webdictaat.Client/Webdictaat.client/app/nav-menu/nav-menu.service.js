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
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var NavMenuService = (function () {
    function NavMenuService(http, router) {
        this.http = http;
        this.router = router;
    }
    NavMenuService.prototype.getNavMenu = function () {
        var _this = this;
        if (this.menu != null) {
            return Promise.resolve(this.menu);
        }
        else {
            return this.http.get('nav-menu.json')
                .toPromise()
                .then(function (response) {
                return _this.menu = response.json();
            }).catch(this.handleError);
        }
    };
    NavMenuService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NavMenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], NavMenuService);
    return NavMenuService;
}());
exports.NavMenuService = NavMenuService;
//# sourceMappingURL=nav-menu.service.js.map