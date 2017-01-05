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
//Nodig om een object om te toveren in een promise.
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var AccountService = (function () {
    function AccountService(http) {
        var _this = this;
        this.http = http;
        this.accountUrl = 'http://webdictaat.azurewebsites.net/api/account/';
        this.subject = new Subject_1.Subject();
        this.http.get(this.accountUrl + "Current", { withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.user = response.json();
            _this.subject.next(_this.user);
        }).catch(this.handleError);
    }
    AccountService.prototype.Login = function () {
        window.location.href = this.accountUrl + "ExternalLogin?returnurl=" + window.location;
    };
    AccountService.prototype.Logoff = function () {
        this.http.post(this.accountUrl + "/LogOff", null)
            .toPromise()
            .then(function (response) {
            //reload browser after logoff
            location.reload();
        }).catch(this.handleError);
    };
    AccountService.prototype.getUser = function () {
        return this.subject.asObservable();
    };
    AccountService.prototype.update = function () {
        this.subject.next(this.user);
    };
    AccountService.prototype.handleError = function () {
        console.log("not logged in ");
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map