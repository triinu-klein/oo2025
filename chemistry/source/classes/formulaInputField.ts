export class FormulaInputField {
    private input: HTMLDivElement;
  
    constructor() {
      this.input = document.createElement("div");
      this.input.contentEditable = "true";
      this.input.classList.add("formula-input");
    }
  
    render(): HTMLDivElement {
      return this.input;
    }
  
    getValue(): string {
      return this.input.innerText.trim();
    }
  
    insertSymbol(symbol: string): void {
      document.execCommand("insertText", false, symbol);
    }
  }
  