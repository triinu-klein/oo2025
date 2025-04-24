"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaInputQuestion = void 0;
var question_1 = require("./question");
var formulaInputField_1 = require("./formulaInputField");
var FormulaInputQuestion = /** @class */ (function (_super) {
    __extends(FormulaInputQuestion, _super);
    function FormulaInputQuestion(prompt, correctAnswer) {
        var _this = _super.call(this, prompt, "formula_input") || this;
        _this.correctAnswer = correctAnswer;
        _this.inputField = new formulaInputField_1.FormulaInputField();
        return _this;
    }
    FormulaInputQuestion.prototype.renderInputComponent = function () {
        var container = document.createElement("div");
        container.innerHTML = "<p>".concat(this.prompt, "</p>");
        container.appendChild(this.inputField.render());
        return container;
    };
    FormulaInputQuestion.prototype.getUserAnswer = function () {
        return this.inputField.getValue();
    };
    FormulaInputQuestion.prototype.checkAnswer = function (userAnswer) {
        return userAnswer.toLowerCase() === this.correctAnswer.toLowerCase();
    };
    FormulaInputQuestion.prototype.getInputField = function () {
        return this.inputField;
    };
    return FormulaInputQuestion;
}(question_1.Question));
exports.FormulaInputQuestion = FormulaInputQuestion;
