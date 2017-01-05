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
var RankingComponent = (function () {
    function RankingComponent(route) {
        this.route = route;
    }
    RankingComponent.prototype.ngOnInit = function () {
    };
    RankingComponent.prototype.giveAnswer = function (answer) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RankingComponent.prototype, "rid", void 0);
    RankingComponent = __decorate([
        core_1.Component({
            selector: "wd-multiple-choice",
            template: "\n        <div class='wd-component'>\n\n            <div *ngIf=\"error\" class=\"alert alert-danger\">\n                <p>{{error}}</p>\n            </div>\n\n\n            <p *ngIf=\"!error && !question\" class='default'>Loading...</p>\n      \n\n            <div *ngIf=\"question\" >\n                <p>{{question.text}}</p>\n\n                <div *ngIf=\"selectedAnswer && selectedAnswer.isCorrect\">\n                    {{selectedAnswer.text}} is correct!\n                </div>\n\n                <div *ngIf=\"selectedAnswer && !selectedAnswer.isCorrect\">\n                    {{selectedAnswer.text}} is not correct.\n                    Feel free to try again!\n                </div>\n\n                <ul>\n                    <li *ngFor='let answer of question.answers' (click)=\"giveAnswer(answer)\">\n                        {{answer.text}}\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], RankingComponent);
    return RankingComponent;
}());
exports.RankingComponent = RankingComponent;
//# sourceMappingURL=ranking.component.js.map