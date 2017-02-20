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
var core_1 = require("@angular/core");
//Nodig om een object om te toveren in een promise.
var Subject_1 = require("rxjs/Subject");
var wdapi_service_1 = require("../core/wdapi.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var RatingService = (function () {
    function RatingService(wdapi) {
        this.wdapi = wdapi;
        this.isModalVisible = false;
        this.subject = new Subject_1.Subject();
    }
    RatingService.prototype.getIsModalVisible = function () {
        return this.subject.asObservable();
    };
    RatingService.prototype.ShowModal = function () {
        var _this = this;
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise(function (resolve, reject) {
            _this.resolveAddRating = resolve;
            _this.resolveCancel = reject;
        });
    };
    RatingService.prototype.CancelModal = function () {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    RatingService.prototype.CompleteModal = function (rating) {
        this.resolveAddRating(rating);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    RatingService.prototype.addRating = function (dictaatName, rating) {
        var _this = this;
        var url = "/dictaten/" + dictaatName + '/rating';
        return this.wdapi.post(url, rating)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            _this.resolveCancel(); //hier nog niet bij mee
            return _this.handleError;
        });
    };
    RatingService.prototype.SendRate = function (dictaatName, ratingId, rate) {
        var _this = this;
        var url = "/dictaten/" + dictaatName + '/rating/' + ratingId + '/rates';
        return this.wdapi.post(url, rate)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            return _this.handleError;
        });
    };
    RatingService.prototype.getRating = function (dictaatName, ratingId) {
        if (!ratingId) {
            return new Promise(function (resolve, reject) {
                reject("Cannot load rating without ratingId");
            });
        }
        var url = "/dictaten/" + dictaatName + '/rating/' + ratingId;
        return this.wdapi.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    RatingService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return RatingService;
}());
RatingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [wdapi_service_1.wdApi])
], RatingService);
exports.RatingService = RatingService;
//# sourceMappingURL=rating.service.js.map