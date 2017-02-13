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
//Nodig om een object om te toveren in een promise.
var Subject_1 = require('rxjs/Subject');
var wdapi_service_1 = require('../core/wdapi.service');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var QuestionsService = (function () {
    function QuestionsService(wdapi) {
        this.wdapi = wdapi;
        this.isModalVisible = false;
        this.subject = new Subject_1.Subject();
    }
    QuestionsService.prototype.getIsModalVisible = function () {
        return this.subject.asObservable();
    };
    QuestionsService.prototype.ShowModal = function () {
        var _this = this;
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise(function (resolve, reject) {
            _this.resolveAddQuestion = resolve;
            _this.resolveCancel = reject;
        });
    };
    QuestionsService.prototype.CancelModal = function () {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    QuestionsService.prototype.CompleteModal = function (question) {
        this.resolveAddQuestion(question);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    QuestionsService.prototype.addQuestion = function (dictaatName, question) {
        var _this = this;
        var url = "/dictaten/" + dictaatName + '/questions';
        return this.wdapi.post(url, question)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            _this.resolveCancel(); //hier nog niet bij mee
        });
    };
    QuestionsService.prototype.getQuestion = function (dictaatName, questionId) {
        if (!questionId) {
            return new Promise(function (resolve, reject) {
                reject("Cannot load question without questionId");
            });
        }
        var url = "/dictaten/" + dictaatName + '/questions/' + questionId;
        return this.wdapi.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    QuestionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [wdapi_service_1.wdApi])
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=question.service.js.map