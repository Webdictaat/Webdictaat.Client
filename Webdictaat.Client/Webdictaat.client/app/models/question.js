"use strict";
var QuestionAnswer = (function () {
    function QuestionAnswer() {
        this.isCorrect = false;
    }
    QuestionAnswer.prototype.toggle = function () {
        this.isCorrect = !this.isCorrect;
    };
    return QuestionAnswer;
}());
exports.QuestionAnswer = QuestionAnswer;
var Question = (function () {
    function Question() {
        this.answers = [];
    }
    Question.prototype.AddAnswer = function () {
        this.answers.push(new QuestionAnswer());
    };
    ;
    Question.prototype.RemoveAnswer = function (answer) {
        var index = this.answers.indexOf(answer);
        this.answers.splice(index, 1);
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map