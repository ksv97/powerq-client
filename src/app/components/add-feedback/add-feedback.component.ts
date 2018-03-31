import {Component, OnInit, Input, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {Event} from '../../classes/event'
import {ShareService} from "../../services/share.service";
import {Subscription} from "rxjs";
import {FeedbackForm} from "../../classes/feedback-form";
import {FeedbackQuestion} from "../../classes/feedback-question";
import {Feedback} from "../../classes/feedback";
import {FeedbackAnswerForm} from "../../classes/feedback-answer-form";
import {FeedbackAnswer} from "../../classes/feedback-answer";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-add-feedback',
  templateUrl: 'add-feedback.component.html',
  styleUrls: ['add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  feedbackForm: FeedbackForm;
  feedbackAnswerForm: FeedbackAnswerForm;
  @Input() eventForFeedback: Event;
  //mockFeedbackForms: FeedbackForm[];
  feedbackForms: FeedbackForm[];

  // questions: string[];

  constructor(private shareService: ShareService, private http: HttpService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.feedbackForm = new FeedbackForm();
    this.feedbackAnswerForm = new FeedbackAnswerForm();

    // this.questions = ["Как было общее впечатление о вас?", "Что проводили и как?", "Какую оценку бы поставили сами себе?"];

    // this.mockFeedbackForms = [];
    // for(let i = 0; i < 2; i++) {
    //   let feedbackForm = new FeedbackForm();
    //   if (i == 0) {
    //     feedbackForm.name = 'Many';
    //     for (let question of this.questions) {
    //       let feedbackQuestion = new FeedbackQuestion();
    //       feedbackQuestion.name = question;
    //       feedbackForm.questions.push(feedbackQuestion);
    //     }
    //   }
    //   else {
    //     feedbackForm.name = 'One';
    //     let feedbackQuestion = new FeedbackQuestion();
    //     feedbackQuestion.name = "Only 1 question";
    //     feedbackForm.questions.push(feedbackQuestion);
    //   }
    //   this.mockFeedbackForms.push(feedbackForm);
    // }



  }

  ngOnInit() {
    this.http.getFeedbackForms().subscribe(
      formsFromServer => this.feedbackForms = formsFromServer
    )
  }

  onFeedbackFormChanged() {
    console.warn('Selected');
    console.log(this.feedbackForm);
    this.feedbackAnswerForm = new FeedbackAnswerForm();
    this.feedbackAnswerForm.deadlineDate = new Date(this.feedbackForm.deadlineDate);
    this.feedbackAnswerForm.name = this.feedbackForm.name;
    for(let question of this.feedbackForm.questions) {
      let feedbackAnswer = new FeedbackAnswer();
      feedbackAnswer.question = question.name;
      this.feedbackAnswerForm.feedbackAnswers.push(feedbackAnswer);
    }
    this.changeDetectorRef.detectChanges();
  }

  saveFeedback() {
    let feedback: Feedback = new Feedback(this.eventForFeedback, this.shareService.currentUser, this.feedbackAnswerForm);
    this.shareService.saveFeedbackClicked(feedback);
  }

}
