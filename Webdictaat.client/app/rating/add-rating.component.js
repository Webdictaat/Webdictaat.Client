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
var rating_service_1 = require('../services/rating.service');
var rating_1 = require('../models/rating');
var router_1 = require('@angular/router');
var AddRatingComponent = (function () {
    function AddRatingComponent(ratingService, route, changeDetector) {
        this.ratingService = ratingService;
        this.route = route;
        this.changeDetector = changeDetector;
    }
    //event
    AddRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
        this.ratingService.getIsModalVisible().subscribe(function (isModalVisible) {
            _this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                _this.rating = new rating_1.Rating();
                _this.changeDetector.detectChanges();
            }
        });
    };
    AddRatingComponent.prototype.Add = function () {
        var _this = this;
        this.ratingService.addRating(this.dictaatName, this.rating)
            .then(function (question) {
            _this.ratingService.CompleteModal(question);
        });
    };
    AddRatingComponent.prototype.Cancel = function () {
        this.ratingService.CancelModal();
    };
    AddRatingComponent = __decorate([
        core_1.Component({
            selector: "wd-add-rating",
            templateUrl: "./app/rating/add-rating.component.html",
        }), 
        __metadata('design:paramtypes', [rating_service_1.RatingService, router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], AddRatingComponent);
    return AddRatingComponent;
}());
exports.AddRatingComponent = AddRatingComponent;
//# sourceMappingURL=add-rating.component.js.map