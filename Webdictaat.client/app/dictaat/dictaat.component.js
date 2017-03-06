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
var dictaat_service_1 = require("../services/dictaat.service");
var router_1 = require("@angular/router");
var DictaatComponent = (function () {
    function DictaatComponent(dictaatService, route, Router) {
        this.dictaatService = dictaatService;
        this.route = route;
        this.Router = Router;
    }
    //event
    DictaatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var name = params['dictaatName'];
            _this.dictaatService.getDictaat(name)
                .then(function (dictaat) {
                _this.dictaat = dictaat;
            });
        });
    };
    return DictaatComponent;
}());
DictaatComponent = __decorate([
    core_1.Component({
        selector: "wd-dictaat",
        templateUrl: "./app/dictaat/dictaat.component.html",
        styleUrls: ["./app/dictaat/dictaat.component.css"],
        providers: [dictaat_service_1.DictaatService]
    }),
    __metadata("design:paramtypes", [dictaat_service_1.DictaatService,
        router_1.ActivatedRoute,
        router_1.Router])
], DictaatComponent);
exports.DictaatComponent = DictaatComponent;
//# sourceMappingURL=dictaat.component.js.map