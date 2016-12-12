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
var router_1 = require('@angular/router');
var AddDictaatComponent = (function () {
    function AddDictaatComponent(dictatenService, route) {
        this.dictatenService = dictatenService;
        this.route = route;
        this.showModal = false;
        this.dictaatName = "";
        this.dictaatAdded = new core_1.EventEmitter();
    }
    //event
    AddDictaatComponent.prototype.ngOnInit = function () {
    };
    AddDictaatComponent.prototype.add = function () {
        var _this = this;
        this.showModal = false;
        this.dictatenService.addDictaat(this.dictaatName)
            .then(function (dictaten) {
            _this.dictaatName = null;
            _this.dictaatAdded.emit(dictaten);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddDictaatComponent.prototype, "dictaatAdded", void 0);
    AddDictaatComponent = __decorate([
        core_1.Component({
            selector: "wd-add-dictaat",
            templateUrl: "./app/dictaten/add-dictaat.component.html",
            providers: [dictaten_service_1.DictatenService]
        }), 
        __metadata('design:paramtypes', [dictaten_service_1.DictatenService, router_1.ActivatedRoute])
    ], AddDictaatComponent);
    return AddDictaatComponent;
}());
exports.AddDictaatComponent = AddDictaatComponent;
//# sourceMappingURL=add-dictaat.component.js.map