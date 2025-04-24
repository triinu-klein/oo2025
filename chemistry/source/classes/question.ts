export abstract class Question {
    constructor(public prompt: string, public type: string) {}
  
    abstract renderInputComponent(): HTMLElement;
    abstract getUserAnswer(): any;
    abstract checkAnswer(userAnswer: any): boolean;
  }
  