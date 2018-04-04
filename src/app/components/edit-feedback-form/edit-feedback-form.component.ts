import {Component, OnInit, Input, SimpleChange, EventEmitter, Output} from '@angular/core';
import {FeedbackForm} from "../../classes/feedback-form";
import {FeedbackQuestion} from "../../classes/feedback-question";

@Component({
  selector: 'app-edit-feedback-form',
  templateUrl: './edit-feedback-form.component.html',
  styleUrls: ['./edit-feedback-form.component.css']
})
export class EditFeedbackFormComponent implements OnInit {

  @Input() inputForm: FeedbackForm;
  formToEdit: FeedbackForm;
  @Output() onSaveChanges=  new EventEmitter<FeedbackForm>();
  @Output() onCancelChanges = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.initializeFormToEdit(this.inputForm);
  }

  ngOnChanges (changes:{inputForm: SimpleChange} ) {
    this.initializeFormToEdit(changes.inputForm.currentValue);
  }

  initializeFormToEdit(form: FeedbackForm) {
    this.formToEdit = new FeedbackForm();
    this.formToEdit.id = form.id;
    this.formToEdit.deadlineDate = form.deadlineDate;
    this.formToEdit.name = form.name;
    for (let question of form.questions) {
      this.formToEdit.questions.push(question);
    }
  }

  addQuestion() {
    this.formToEdit.questions.push(new FeedbackQuestion());
  }

  removeQuestion(question: FeedbackQuestion) {
    let indexOfQuestion = this.formToEdit.questions.indexOf(question);
    if (indexOfQuestion > -1) {
      this.formToEdit.questions.splice(indexOfQuestion, 1);
    }
  }

  cancelEditing() {
    this.onCancelChanges.emit();
  }

  saveFeedbackForm() {
    this.onSaveChanges.emit(this.formToEdit);
  }

}
