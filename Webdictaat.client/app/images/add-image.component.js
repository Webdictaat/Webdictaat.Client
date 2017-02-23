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
var images_service_1 = require('../services/images.service');
var router_1 = require('@angular/router');
var AddImageComponent = (function () {
    function AddImageComponent(imageService, route, changeDetector) {
        this.imageService = imageService;
        this.route = route;
        this.changeDetector = changeDetector;
    }
    //event
    AddImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
        this.imageService.getIsModalVisible().subscribe(function (isModalVisible) {
            _this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                _this.changeDetector.detectChanges();
            }
        });
    };
    AddImageComponent.prototype.fileChange = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AddImageComponent.prototype.Add = function () {
        var _this = this;
        this.imageService.addImages(this.dictaatName, this.selectedFile)
            .then(function (imageLocation) {
            _this.imageService.CompleteModal(imageLocation);
        });
    };
    AddImageComponent.prototype.Cancel = function () {
        this.imageService.CancelModal();
    };
    AddImageComponent = __decorate([
        core_1.Component({
            selector: "wd-add-image",
            templateUrl: "./app/images/add-image.component.html",
        }), 
        __metadata('design:paramtypes', [images_service_1.ImageService, router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], AddImageComponent);
    return AddImageComponent;
}());
exports.AddImageComponent = AddImageComponent;
//# sourceMappingURL=add-image.component.js.map