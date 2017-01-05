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
var RatingComponent = (function () {
    function RatingComponent(route, ratingService) {
        this.route = route;
        this.ratingService = ratingService;
    }
    RatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
            _this.ratingService.getRating(_this.dictaatName, _this.rid)
                .then(function (rating) {
                _this.rating = rating;
            })
                .catch(function (reason) { return _this.error = reason; });
        });
    };
    RatingComponent.prototype.rate = function () {
    };
    RatingComponent.prototype.setEmotion = function (emotion) {
        this.rating.emotion = emotion;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "rid", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: "wd-rating",
            styles: ["\n        .emotion{\n             width: 35px; cursor: pointer;\n             -webkit-transition: all 0.4s; /* Safari */\n            transition: all 0.4s;\n            margin:4px;\n        }\n        .emotion.active { \n            transform: scale(1.3, 1.3); \n        }\n    "],
            template: "\n        <div class='wd-component'>\n\n            <div *ngIf=\"error\" class=\"alert alert-danger\">\n                <p>{{error}}</p>\n            </div>\n\n            <div class=\"bs-callout bs-callout-info row\" *ngIf=\"rating\">\n                <div class=\"col-md-3\">\n\n                  <h4>{{rating.title}}</h4>\n                  <p>{{rating.description}}</p>\n\n                  <div>\n                    <img (click)=\"setEmotion('sad')\" [ngClass]=\"{ 'active' : rating.emotion == 'sad' }\" class='emotion' src=\"http://webdictaat.azurewebsites.net/images/shared/sad.png\">\n                    <img (click)=\"setEmotion('happy')\" [ngClass]=\"{ 'active' : rating.emotion == 'happy' }\" class='emotion'  src=\"http://webdictaat.azurewebsites.net/images/shared/happy.png\">\n                  </div>\n\n                  <button class='btn btn-info btn-raised' *ngIf=\"rating.emotion\" (click)=\"rate()\">Send rating</button>\n\n                </div>\n\n                <div  class='col-md-6 well well-md' *ngIf=\"rating.emotion\">\n                    <textarea class=\"form-control\" rows=\"3\" id=\"textArea\"></textarea>\n                    <span class=\"help-block\">Would you like to give feedback?</span>\n                </div>\n\n\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, rating_service_1.RatingService])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map