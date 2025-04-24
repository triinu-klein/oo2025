"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChemicalKeyboard = void 0;
var ChemicalKeyboard = /** @class */ (function () {
    function ChemicalKeyboard(targetField) {
        this.targetField = targetField;
        this.symbols = ["→", "⇌", "+", "−", "H", "O", "Na", "Cl"];
    }
    ChemicalKeyboard.prototype.render = function () {
        var _this = this;
        var container = document.createElement("div");
        container.classList.add("chem-keyboard");
        this.symbols.forEach(function (sym) {
            var button = document.createElement("button");
            button.textContent = sym;
            button.onclick = function () { return _this.targetField.insertSymbol(sym); };
            container.appendChild(button);
        });
        return container;
    };
    return ChemicalKeyboard;
}());
exports.ChemicalKeyboard = ChemicalKeyboard;
