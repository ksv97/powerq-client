import {FeedbackAnswerForm} from "./feedback-answer-form";
import {Event} from './event'
import {User} from "./user";
export class Feedback {
  // id: number;
  dateOfWriting: Date;
  mark: number;
  feedbackAnswerForm: FeedbackAnswerForm;
  event: Event;
  author: User;

  constructor(eventForFeedback: Event, author: User, feedbackAnswerForm: FeedbackAnswerForm) {
    this.dateOfWriting = new Date();
    // this.id = -1;
    this.feedbackAnswerForm = feedbackAnswerForm;
    this.event = eventForFeedback;
    this.author = author;
    this.mark = 0;
  }
}
