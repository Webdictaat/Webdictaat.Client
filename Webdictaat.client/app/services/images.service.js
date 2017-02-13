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
var Subject_1 = require('rxjs/Subject');
var wdapi_service_1 = require('../core/wdapi.service');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var ImageService = (function () {
    function ImageService(wdapi) {
        this.wdapi = wdapi;
        this.isModalVisible = false;
        this.subject = new Subject_1.Subject();
    }
    ImageService.prototype.getIsModalVisible = function () {
        return this.subject.asObservable();
    };
    ImageService.prototype.ShowModal = function () {
        var _this = this;
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise(function (resolve, reject) {
            _this.resolveAddImage = resolve;
            _this.resolveCancel = reject;
        });
    };
    ImageService.prototype.CancelModal = function () {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    ImageService.prototype.CompleteModal = function (imageLocation) {
        this.resolveAddImage(imageLocation);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    ImageService.prototype.addImages = function (dictaatName, image) {
        var url = "/dictaten/" + dictaatName + '/upload';
        return this.wdapi.postFile(url, image);
    };
    ImageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [wdapi_service_1.wdApi])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=images.service.js.map