import {Component, OnInit, Input} from '@angular/core';
import {Feedback} from "../../classes/feedback";
import {FeedbackForm} from "../../classes/feedback-form";
import {FeedbackAnswerForm} from "../../classes/feedback-answer-form";
import {FeedbackAnswer} from "../../classes/feedback-answer";
import {HttpService} from "../../services/http.service";
import {ShareService} from "../../services/share.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-feedback',
  templateUrl: 'edit-feedback.component.html',
  styleUrls: ['edit-feedback.component.css']
})
export class EditFeedbackComponent implements OnInit {

  @Input() feedbackToEdit: Feedback;
  @Input() readonly: boolean;
  private editedFeedback: Feedback;

  feedbackAnswerForm: FeedbackAnswerForm; // for editing

  constructor(private http: HttpService, public shareService: ShareService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.editedFeedback = new Feedback(this.feedbackToEdit.event, this.feedbackToEdit.author, this.feedbackToEdit.feedbackAnswerForm);
    this.editedFeedback.dateOfWriting = new Date(this.feedbackToEdit.dateOfWriting);
    this.editedFeedback.event.date = new Date(this.feedbackToEdit.event.date);
    this.editedFeedback.mark = this.feedbackToEdit.mark;
  }

  toggleEditor() {
    this.readonly = false;
  }

  updateFeedback() {
    this.shareService.updateFeedbackEvent.emit(this.editedFeedback);
  }

  deleteFeedback() {
    let dataForFeedbackDeleting = {
      eventId: this.editedFeedback.event.id,
      userId: this.editedFeedback.author.id
    };
    this.shareService.deleteFeedbackEvent.emit(dataForFeedbackDeleting);
  }

  openModal(content) {
    this.modalService.open(content);
  }

}
