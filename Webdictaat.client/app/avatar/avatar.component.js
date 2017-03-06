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
var account_service_1 = require("../services/account.service");
var AvatarComponent = (function () {
    function AvatarComponent(accountService) {
        this.accountService = accountService;
    }
    AvatarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    AvatarComponent.prototype.Login = function () {
        this.accountService.Login();
    };
    AvatarComponent.prototype.Logout = function () {
        this.accountService.Logoff();
    };
    return AvatarComponent;
}());
AvatarComponent = __decorate([
    core_1.Component({
        selector: "wd-avatar",
        template: "\n<div *ngIf=\"user\">\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"item-hover\" routerLink=\"/profile\">\n            <p class=\"navbar-text\">Signed in as {{user.email}}</p>\n        </li>\n        <li>\n            <button class=\"btn btn-default navbar-btn\" (click)=\"Logout()\">Logout</button>\n             \n        </li>\n    </ul>\n</div>\n\n<div *ngIf=\"!user\">\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n            <button class=\"btn btn-default navbar-btn\" (click)=\"Login()\">Login</button>\n        </li>\n    </ul>\n</div>\n",
        providers: []
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AvatarComponent);
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=avatar.component.js.map