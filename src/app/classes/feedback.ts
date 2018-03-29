import {FeedbackAnswerForm} from "./feedback-answer-form";
import {Event} from './event'
export class Feedback {
  id: number;
  dateOfWriting: Date;
  mark: number;
  feedbackAnswerForm: FeedbackAnswerForm;
  event: Event;

  constructor() {
    this.dateOfWriting = new Date();
    this.id = -1;
    this.feedbackAnswerForm = new FeedbackAnswerForm();
    this.event = new Event();
  }
}
