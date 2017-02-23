"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var wdapi_service_1 = require('../core/wdapi.service');
var basemodal_service_1 = require('../core/basemodal.service');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var ImageService = (function (_super) {
    __extends(ImageService, _super);
    function ImageService(wdapi) {
        _super.call(this);
        this.wdapi = wdapi;
    }
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
}(basemodal_service_1.BaseModalService));
exports.ImageService = ImageService;
//# sourceMappingURL=images.service.js.map