"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formulaInputQuestion_1 = require("./classes/formulaInputQuestion");
var testTaker_1 = require("./classes/testTaker");
var chemicalKeyboard_1 = require("./classes/chemicalKeyboard");
var question = new formulaInputQuestion_1.FormulaInputQuestion("Enter the formula for water:", "H2O");
var testTaker = new testTaker_1.TestTaker([question]);
var container = document.getElementById("test");
if (container) {
    testTaker.render(container);
    var keyboard = new chemicalKeyboard_1.ChemicalKeyboard(question.getInputField());
    container.appendChild(keyboard.render());
}
