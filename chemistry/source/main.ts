import { FormulaInputQuestion } from "./classes/formulaInputQuestion";
import { TestTaker } from "./classes/testTaker";
import { ChemicalKeyboard } from "./classes/chemicalKeyboard";

const question = new FormulaInputQuestion("Enter the formula for water:", "H2O");
const testTaker = new TestTaker([question]);

const container = document.getElementById("test");
if (container) {
  testTaker.render(container);

  const keyboard = new ChemicalKeyboard(question.getInputField());
  container.appendChild(keyboard.render());
}
