import { Question } from "./question";
import { Submission } from "./submission";

export class TestTaker {
  constructor(private questions: Question[]) {}

  render(container: HTMLElement): void {
    container.innerHTML = "";

    this.questions.forEach((question) => {
      const element = question.renderInputComponent();
      container.appendChild(element);
    });

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Answers";
    submitBtn.onclick = () => this.submit();
    container.appendChild(submitBtn);
  }

  private submit(): void {
    const submission = new Submission(
      this.questions.map((q) => ({
        question: q,
        answer: q.getUserAnswer(),
      }))
    );

    submission.grade();
    alert(`Score: ${submission.getScore()} / ${this.questions.length}`);
  }
}
