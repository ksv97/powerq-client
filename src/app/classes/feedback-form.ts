import {FeedbackQuestion} from "./feedback-question";
export class FeedbackForm {
  id: number;
  name: string;
  deadlineDate: Date;
  questions: FeedbackQuestion[];

  constructor () {
    this.id = -1;
    this.questions = [];
    this.deadlineDate = new Date();
  }
}
