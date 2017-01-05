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
var question_service_1 = require('../services/question.service');
var router_1 = require('@angular/router');
var account_service_1 = require('../services/account.service');
var MultipleChoiceComponent = (function () {
    function MultipleChoiceComponent(questionsService, route, accountService) {
        this.questionsService = questionsService;
        this.route = route;
        this.accountService = accountService;
    }
    MultipleChoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) {
            _this.isAuth = user != null;
        });
        //Krijg initiele waarde van observable niet :(
        this.accountService.update();
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
            _this.questionsService.getQuestion(_this.dictaatName, _this.qid)
                .then(function (question) { return _this.question = question; })
                .catch(function (reason) { return _this.error = reason; });
        });
        this.questionsService.getQuestion;
    };
    MultipleChoiceComponent.prototype.giveAnswer = function (answer) {
        this.selectedAnswer = answer;
    };
    MultipleChoiceComponent.prototype.login = function () {
        this.accountService.Login();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MultipleChoiceComponent.prototype, "qid", void 0);
    MultipleChoiceComponent = __decorate([
        core_1.Component({
            selector: "wd-multiple-choice",
            styles: ["\n\n.answers {\n    list-style-type:none;\n    padding-left:5px;\n    padding-right:5px;\n}    \n\n    "],
            template: "\n        <div class='wd-component'>\n\n            <div *ngIf=\"error\" class=\"alert alert-danger\">\n                <p>{{error}}</p>\n            </div>\n\n            <p *ngIf=\"!error && isAuth && !question\" class='default'>Loading...</p>\n      \n            <div class=\"bs-callout bs-callout-primary\" *ngIf=\"question\" >\n  \n                <h4>{{question.text}}</h4>\n\n                <div *ngIf=\"!isAuth\">\n                    <button class='btn btn-info btn-raised' (click)=\"login()\">Login to submit answers</button>\n                </div>\n\n                <div *ngIf=\"isAuth\">\n                    <div *ngFor='let answer of question.answers'>\n                        <button class=\"btn btn-raised btn-default\" (click)=\"giveAnswer(answer)\"\n                                [ngClass]=\"{ \n                                    'btn-success' :  selectedAnswer == answer  && selectedAnswer.isCorrect,\n                                    'btn-danger' : selectedAnswer == answer  && !selectedAnswer.isCorrect\n                                }\">\n                            {{answer.text}}\n                        </button>\n                    </div>\n\n                     <div *ngIf=\"selectedAnswer && selectedAnswer.isCorrect\">\n                        {{selectedAnswer.text}} is correct!\n                    </div>\n\n                    <div *ngIf=\"selectedAnswer && !selectedAnswer.isCorrect\">\n                        {{selectedAnswer.text}} is not correct.\n                        Feel free to try again!\n                    </div>\n                    \n                </div>\n            </div>\n\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionsService, router_1.ActivatedRoute, account_service_1.AccountService])
    ], MultipleChoiceComponent);
    return MultipleChoiceComponent;
}());
exports.MultipleChoiceComponent = MultipleChoiceComponent;
//# sourceMappingURL=multiple-choice.component.js.map