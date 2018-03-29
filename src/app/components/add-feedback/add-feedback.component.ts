import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../classes/event'
import {ShareService} from "../../services/share.service";
import {Subscription} from "rxjs";
import {FeedbackForm} from "../../classes/feedback-form";
import {FeedbackQuestion} from "../../classes/feedback-question";

@Component({
  selector: 'app-add-feedback',
  templateUrl: 'add-feedback.component.html',
  styleUrls: ['add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  feedbackForm: FeedbackForm;
  @Input() eventForFeedback: Event;
  mockFeedbackForms: FeedbackForm[];

  questions: string[];

  constructor(private shareService: ShareService) {
    this.feedbackForm = new FeedbackForm();
    this.questions = ["Как было общее впечатление о вас?", "Что проводили и как?", "Какую оценку бы поставили сами себе?"];

    this.mockFeedbackForms = [];
    for(let i = 0; i < 2; i++) {
      let feedbackForm = new FeedbackForm();
      if (i == 0) {
        feedbackForm.name = 'Many';
        for (let question of this.questions) {
          let feedbackQuestion = new FeedbackQuestion();
          feedbackQuestion.name = question;
          feedbackForm.questions.push(feedbackQuestion);
        }
      }
      else {
        feedbackForm.name = 'One';
        let feedbackQuestion = new FeedbackQuestion();
        feedbackQuestion.name = "Only 1 question";
        feedbackForm.questions.push(feedbackQuestion);
      }
      this.mockFeedbackForms.push(feedbackForm);
    }

  }

  ngOnInit() {
  }

}
