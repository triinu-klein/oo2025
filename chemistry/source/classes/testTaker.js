"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTaker = void 0;
var submission_1 = require("./submission");
var TestTaker = /** @class */ (function () {
    function TestTaker(questions) {
        this.questions = questions;
    }
    TestTaker.prototype.render = function (container) {
        var _this = this;
        container.innerHTML = "";
        this.questions.forEach(function (question) {
            var element = question.renderInputComponent();
            container.appendChild(element);
        });
        var submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit Answers";
        submitBtn.onclick = function () { return _this.submit(); };
        container.appendChild(submitBtn);
    };
    TestTaker.prototype.submit = function () {
        var submission = new submission_1.Submission(this.questions.map(function (q) { return ({
            question: q,
            answer: q.getUserAnswer(),
        }); }));
        submission.grade();
        alert("Score: ".concat(submission.getScore(), " / ").concat(this.questions.length));
    };
    return TestTaker;
}());
exports.TestTaker = TestTaker;
