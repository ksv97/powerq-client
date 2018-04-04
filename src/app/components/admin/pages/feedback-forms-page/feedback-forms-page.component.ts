import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {FeedbackForm} from "../../../../classes/feedback-form";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Actions} from "../../../../enums/Actions";
import {FeedbackQuestion} from "../../../../classes/feedback-question";
import {MessageService} from "../../../../services/message.service";

@Component({
  selector: 'app-feedback-forms-page',
  templateUrl: './feedback-forms-page.component.html',
  styleUrls: ['./feedback-forms-page.component.css']
})
export class FeedbackFormsPageComponent implements OnInit {

  public actions = Actions;
  currentAction: Actions = Actions.None;
  feedbackForms: FeedbackForm[];

  constructor(private  http: HttpService, private modalService: NgbModal, private messageService: MessageService) { }

  ngOnInit() {
    this.http.getFeedbackForms().subscribe(
      result => this.feedbackForms = result
    )
  }

  openModal(content) {
    this.modalService.open(content);
  }

  createFeedbackForm(newForm: FeedbackForm) {
    this.http.createFeedbackForm(newForm).subscribe(
      result => {
        newForm.id = result;
        this.feedbackForms.push(newForm);
        this.messageService.add('Форма отчета упешно создана!');
        this.currentAction = Actions.None;
      }
    )
  }


  deleteFeedbackForm() {

  }

}
