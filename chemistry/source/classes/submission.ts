import { Question } from "./question";

interface AnswerPair {
  question: Question;
  answer: any;
}

export class Submission {
  private score: number = 0;

  constructor(private answers: AnswerPair[]) {}

  grade(): void {
    this.score = this.answers.reduce((acc, { question, answer }) => {
      return acc + (question.checkAnswer(answer) ? 1 : 0);
    }, 0);
  }

  getScore(): number {
    return this.score;
  }
}
