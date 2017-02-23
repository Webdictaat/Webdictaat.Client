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
var dictaten_service_1 = require('../services/dictaten.service');
var account_service_1 = require('../services/account.service');
var ProfileComponent = (function () {
    function ProfileComponent(dictatenService, accountService) {
        this.dictatenService = dictatenService;
        this.accountService = accountService;
        this.msg = "hello world";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) { return _this.user = user; });
        this.dictatenService.getDictaten()
            .then(function (dictaten) { return _this.dictaten = dictaten; });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "wd-profile",
            templateUrl: "./app/profile/profile.component.html",
            providers: []
        }), 
        __metadata('design:paramtypes', [dictaten_service_1.DictatenService, account_service_1.AccountService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map