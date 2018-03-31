import {FeedbackAnswer} from "./feedback-answer";
export class FeedbackAnswerForm {
  id: number;
  name: string;
  deadlineDate: Date;
  feedbackAnswers: FeedbackAnswer[];

  constructor() {
    this.id = -1;
    this.deadlineDate = new Date();
    this.feedbackAnswers = [];
  }
}
