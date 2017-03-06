"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Nodig om een object om te toveren in een promise.
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var BaseModalService = (function () {
    function BaseModalService() {
        this.isModalVisible = false;
        this.subject = new Subject_1.Subject();
    }
    BaseModalService.prototype.getIsModalVisible = function () {
        return this.subject.asObservable();
    };
    BaseModalService.prototype.ShowModal = function () {
        var _this = this;
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise(function (resolve, reject) {
            _this.resolveComplete = resolve;
            _this.resolveCancel = reject;
        });
    };
    BaseModalService.prototype.CancelModal = function () {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    BaseModalService.prototype.CompleteModal = function (objectToResolve) {
        this.resolveComplete(objectToResolve);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    return BaseModalService;
}());
BaseModalService = __decorate([
    core_1.Injectable()
], BaseModalService);
exports.BaseModalService = BaseModalService;
//# sourceMappingURL=basemodal.service.js.map