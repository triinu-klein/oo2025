"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submission = void 0;
var Submission = /** @class */ (function () {
    function Submission(answers) {
        this.answers = answers;
        this.score = 0;
    }
    Submission.prototype.grade = function () {
        this.score = this.answers.reduce(function (acc, _a) {
            var question = _a.question, answer = _a.answer;
            return acc + (question.checkAnswer(answer) ? 1 : 0);
        }, 0);
    };
    Submission.prototype.getScore = function () {
        return this.score;
    };
    return Submission;
}());
exports.Submission = Submission;
