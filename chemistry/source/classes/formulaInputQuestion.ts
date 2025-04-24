import { Question } from "./question";
import { FormulaInputField } from "./formulaInputField";

export class FormulaInputQuestion extends Question {
  private inputField: FormulaInputField;

  constructor(prompt: string, private correctAnswer: string) {
    super(prompt, "formula_input");
    this.inputField = new FormulaInputField();
  }

  renderInputComponent(): HTMLElement {
    const container = document.createElement("div");
    container.innerHTML = `<p>${this.prompt}</p>`;
    container.appendChild(this.inputField.render());
    return container;
  }

  getUserAnswer(): string {
    return this.inputField.getValue();
  }

  checkAnswer(userAnswer: string): boolean {
    return userAnswer.toLowerCase() === this.correctAnswer.toLowerCase();
  }

  getInputField(): FormulaInputField {
    return this.inputField;
  }
}
