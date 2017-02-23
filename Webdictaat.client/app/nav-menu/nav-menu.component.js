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
var nav_menu_service_1 = require('./nav-menu.service');
var nav_menu_1 = require('../models/nav-menu');
var NavMenuComponent = (function () {
    function NavMenuComponent(route, navMenuService) {
        this.route = route;
        this.navMenuService = navMenuService;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navMenu == null) {
            this.navMenuService.getNavMenu()
                .then(function (navMenu) {
                _this.navMenu = navMenu;
            });
        }
    };
    NavMenuComponent.prototype.toggleMenu = function () {
        this.showMenu = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', nav_menu_1.NavMenu)
    ], NavMenuComponent.prototype, "navMenu", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavMenuComponent.prototype, "isRoot", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavMenuComponent.prototype, "showMenu", void 0);
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: "wd-nav-menu",
            template: "\n<ul class=\"nav navbar-nav\" *ngIf=\"navMenu\" [ngClass]=\"{'dropdown-menu ': !isRoot}\">\n\n    <li *ngFor=\"let item of navMenu.MenuItems\" >\n        <a routerLink=\"{{item.Url}}\" routerLinkActive=\"active\">{{item.Name}}</a>\n    </li>\n\n    {{showMenu}}\n\n    <li class=\"dropdown\" *ngFor=\"let menu of navMenu.SubMenus\">\n\n        <a  (click)=\"menu.show = !menu.show\" class=\"dropdown-toggle\">{{menu.Name}}<span class=\"caret\"></span></a>\n      \n        <wd-nav-menu [navMenu]=\"menu\" [showMenu]=\"showMenu\"  (click)=\"menu.show = !menu.show\" *ngIf=\"menu.show\">\n        </wd-nav-menu>\n    </li>\n</ul>\n",
            providers: [nav_menu_service_1.NavMenuService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, nav_menu_service_1.NavMenuService])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=nav-menu.component.js.map