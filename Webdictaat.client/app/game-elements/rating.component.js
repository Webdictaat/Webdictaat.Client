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
var rating_service_1 = require('../services/rating.service');
var account_service_1 = require('../services/account.service');
var rating_1 = require('../models/rating');
var RatingComponent = (function () {
    function RatingComponent(route, ratingService, accountService) {
        this.route = route;
        this.ratingService = ratingService;
        this.accountService = accountService;
        this.rate = new rating_1.Rate();
    }
    RatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) {
            _this.isAuth = user != null;
        });
        //Krijg initiele waarde van observable niet :(
        this.accountService.update();
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
            _this.ratingService.getRating(_this.dictaatName, _this.rid)
                .then(function (rating) {
                _this.rating = rating;
            })
                .catch(function (reason) { return _this.error = reason; });
        });
    };
    RatingComponent.prototype.login = function () {
        this.accountService.Login();
    };
    RatingComponent.prototype.sendRate = function () {
        var _this = this;
        this.ratingService.SendRate(this.dictaatName, this.rating.id, this.rate)
            .then(function (rate) { return _this.rating.myRate = rate; });
    };
    RatingComponent.prototype.setEmotion = function (emotion) {
        this.rate.emotion = emotion;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "rid", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: "wd-rating",
            styles: ["\n        .emotion{\n             width: 35px; cursor: pointer;\n             -webkit-transition: all 0.4s; /* Safari */\n            transition: all 0.4s;\n            margin:4px;\n        }\n        .emotion.active { \n            transform: scale(1.3, 1.3); \n        }\n    "],
            template: "\n    <div class='wd-component'>\n\n        <div *ngIf=\"error\" class=\"alert alert-danger\">\n            <p>{{error}}</p>\n        </div>\n\n        <div class=\"bs-callout bs-callout-info\" *ngIf=\"rating\" >\n               \n            <h4>{{rating.title}}</h4>\n            <p>{{rating.description}}</p>\n\n            <div *ngIf=\"!isAuth\">\n                 <button class='btn btn-info btn-raised' (click)=\"login()\">Login to give feedback</button>\n            </div>\n\n            <div *ngIf=\"isAuth\">\n\n                <div *ngIf=\"!rating.myRate\">\n                    <div>\n                        <img (click)=\"setEmotion('sad')\" [ngClass]=\"{ 'active' : rate.emotion == 'sad' }\" class='emotion' src=\"http://webdictaat.azurewebsites.net/images/shared/sad.png\">\n                        <img (click)=\"setEmotion('happy')\" [ngClass]=\"{ 'active' : rate.emotion == 'happy' }\" class='emotion'  src=\"http://webdictaat.azurewebsites.net/images/shared/happy.png\">\n                    </div>\n\n                    <div *ngIf=\"rate.emotion\">\n                        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]='rate.feedback' id=\"textArea\"></textarea>\n                        <span class=\"help-block\">Would you like to give feedback?</span>\n                        <button class='btn btn-info btn-raised' (click)=\"sendRate()\">Send rating</button>\n                    </div>\n                </div>\n\n                <div *ngIf=\"rating.myRate\">\n                    <p>Thank you for the feedback!</p>\n                    <p *ngIf=\"rating.myRate.feedback\"> \n                        <img width=\"30px\" *ngIf=\"rating.myRate.emotion == 0\" src=\"http://webdictaat.azurewebsites.net/images/shared/sad.png\">\n                        <img width=\"30px\" *ngIf=\"rating.myRate.emotion == 1\" src=\"http://webdictaat.azurewebsites.net/images/shared/happy.png\">\n                        - \"{{rating.myRate.feedback}}\"</p>\n                </div>\n\n\n            </div>\n\n            \n\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, rating_service_1.RatingService, account_service_1.AccountService])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map