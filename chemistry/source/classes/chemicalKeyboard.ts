import { FormulaInputField } from "./formulaInputField";

export class ChemicalKeyboard {
  private symbols: string[] = ["→", "⇌", "+", "−", "H", "O", "Na", "Cl"];
  
  constructor(private targetField: FormulaInputField) {}

  render(): HTMLDivElement {
    const container = document.createElement("div");
    container.classList.add("chem-keyboard");

    this.symbols.forEach((sym) => {
      const button = document.createElement("button");
      button.textContent = sym;
      button.onclick = () => this.targetField.insertSymbol(sym);
      container.appendChild(button);
    });

    return container;
  }
}
