import {FeedbackAnswerForm} from "./feedback-answer-form";
import {Event} from './event'
import {User} from "./user";
export class Feedback {
  // id: number;
  dateOfWriting: Date;
  mark: number;
  feedbackAnswerForm: FeedbackAnswerForm;
  event: Event;

  constructor(eventAuthor: User) {
    this.dateOfWriting = new Date();
    // this.id = -1;
    this.feedbackAnswerForm = new FeedbackAnswerForm();
    this.event = new Event(eventAuthor);
  }
}
