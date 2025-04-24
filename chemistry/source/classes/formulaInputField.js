"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaInputField = void 0;
var FormulaInputField = /** @class */ (function () {
    function FormulaInputField() {
        this.input = document.createElement("div");
        this.input.contentEditable = "true";
        this.input.classList.add("formula-input");
    }
    FormulaInputField.prototype.render = function () {
        return this.input;
    };
    FormulaInputField.prototype.getValue = function () {
        return this.input.innerText.trim();
    };
    FormulaInputField.prototype.insertSymbol = function (symbol) {
        document.execCommand("insertText", false, symbol);
    };
    return FormulaInputField;
}());
exports.FormulaInputField = FormulaInputField;
