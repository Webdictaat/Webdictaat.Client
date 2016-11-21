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
var MultipleChoiceComponent = (function () {
    function MultipleChoiceComponent(questionsService, route) {
        this.questionsService = questionsService;
        this.route = route;
    }
    MultipleChoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
            _this.questionsService.getQuestion(_this.dictaatName, _this.qid)
                .then(function (question) { return _this.question = question; });
        });
        this.questionsService.getQuestion;
    };
    MultipleChoiceComponent.prototype.giveAnswer = function (answer) {
        this.selectedAnswer = answer;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MultipleChoiceComponent.prototype, "qid", void 0);
    MultipleChoiceComponent = __decorate([
        core_1.Component({
            selector: "wd-multiple-choice",
            template: "\n        <div class='wd-component'>\n\n             <div *ngIf=\"!question\" >\n                <p>Loading...</p>\n            </div>\n\n            <div *ngIf=\"question\" >\n                <p>{{question.text}}</p>\n\n                <div *ngIf=\"selectedAnswer && selectedAnswer.isCorrect\">\n                    {{selectedAnswer.text}} is correct!\n                </div>\n\n                <div *ngIf=\"selectedAnswer && !selectedAnswer.isCorrect\">\n                    {{selectedAnswer.text}} is not correct.\n                    Feel free to try again!\n                </div>\n\n                <ul>\n                    <li *ngFor='let answer of question.answers' (click)=\"giveAnswer(answer)\">\n                        {{answer.text}}\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionsService, router_1.ActivatedRoute])
    ], MultipleChoiceComponent);
    return MultipleChoiceComponent;
}());
exports.MultipleChoiceComponent = MultipleChoiceComponent;
//# sourceMappingURL=multiple-choice.component.js.map