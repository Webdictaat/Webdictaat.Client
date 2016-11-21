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
var question_1 = require('../models/question');
var router_1 = require('@angular/router');
var AddQuestionComponent = (function () {
    function AddQuestionComponent(questionsService, route, changeDetector) {
        this.questionsService = questionsService;
        this.route = route;
        this.changeDetector = changeDetector;
        this.questionAdded = new core_1.EventEmitter();
    }
    //event
    AddQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
        this.questionsService.getIsModalVisible().subscribe(function (isModalVisible) {
            _this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                _this.question = new question_1.Question();
                _this.changeDetector.detectChanges();
            }
        });
    };
    AddQuestionComponent.prototype.Add = function () {
        var _this = this;
        this.questionsService.addQuestion(this.dictaatName, this.question)
            .then(function (question) {
            _this.questionsService.HideAddQuestionModal();
        });
    };
    AddQuestionComponent.prototype.Cancel = function () {
        this.questionsService.HideAddQuestionModal();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddQuestionComponent.prototype, "questionAdded", void 0);
    AddQuestionComponent = __decorate([
        core_1.Component({
            selector: "wd-add-question",
            templateUrl: "./app/questions/add-question.component.html",
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionsService, router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());
exports.AddQuestionComponent = AddQuestionComponent;
//# sourceMappingURL=add-question.component.js.map