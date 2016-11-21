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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', nav_menu_1.NavMenu)
    ], NavMenuComponent.prototype, "navMenu", void 0);
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: "wd-nav-menu",
            templateUrl: "http://localhost:3000/app/nav-menu/nav-menu.component.html",
            providers: [nav_menu_service_1.NavMenuService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, nav_menu_service_1.NavMenuService])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=nav-menu.component.js.map