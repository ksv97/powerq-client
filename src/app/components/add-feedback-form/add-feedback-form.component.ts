import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FeedbackForm} from "../../classes/feedback-form";
import {HttpService} from "../../services/http.service";
import {FeedbackQuestion} from "../../classes/feedback-question";

@Component({
  selector: 'app-add-feedback-form',
  templateUrl: './add-feedback-form.component.html',
  styleUrls: ['./add-feedback-form.component.css']
})
export class AddFeedbackFormComponent implements OnInit {

  newForm: FeedbackForm;
  @Output() onFormSaved = new EventEmitter<FeedbackForm>();
  @Output() onFormCanceled = new EventEmitter();

  constructor() {
    this.newForm = new FeedbackForm();
  }

  addQuestion() {
    let question: FeedbackQuestion = new FeedbackQuestion();
    this.newForm.questions.push(question);
  }

  ngOnInit() {
  }

  saveFeedbackForm() {
    this.onFormSaved.emit(this.newForm);
  }

  cancel() {
    this.onFormCanceled.emit();
  }

  removeQuestion(question: FeedbackQuestion) {
    let indexOfQuestion = this.newForm.questions.indexOf(question);
    if (indexOfQuestion > -1) {
      this.newForm.questions.splice(indexOfQuestion, 1);
    }
  }

}
