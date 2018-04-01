import {Component, OnInit, Input, SimpleChange, SimpleChanges} from '@angular/core';
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
    this.initializeEditedFeedback(this.feedbackToEdit);
  }

  ngOnChanges (changes:{feedbackToEdit: SimpleChange} ) {
    this.initializeEditedFeedback(changes.feedbackToEdit.currentValue);
  }


  initializeEditedFeedback (feedback: Feedback) {
    this.editedFeedback = new Feedback(feedback.event, feedback.author, feedback.feedbackAnswerForm);
    this.editedFeedback.dateOfWriting = new Date(feedback.dateOfWriting);
    this.editedFeedback.event.date = new Date(feedback.event.date);
    this.editedFeedback.mark = feedback.mark;
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
