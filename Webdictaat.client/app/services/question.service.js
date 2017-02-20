"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var wdapi_service_1 = require("../core/wdapi.service");
var basemodal_service_1 = require("../core/basemodal.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var QuestionsService = (function (_super) {
    __extends(QuestionsService, _super);
    function QuestionsService(wdapi) {
        var _this = _super.call(this) || this;
        _this.wdapi = wdapi;
        return _this;
    }
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
    return QuestionsService;
}(basemodal_service_1.BaseModalService));
QuestionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [wdapi_service_1.wdApi])
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=question.service.js.map