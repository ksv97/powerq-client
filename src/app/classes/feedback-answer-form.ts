import {FeedbackAnswer} from "./feedback-answer";
export class FeedbackAnswerForm {
  id: number;
  name: string;
  deadlineDate: Date;
  feedbackAnswers: FeedbackAnswer[];

  constructor() {
    this.deadlineDate = new Date();
    this.feedbackAnswers = [];
  }
}
