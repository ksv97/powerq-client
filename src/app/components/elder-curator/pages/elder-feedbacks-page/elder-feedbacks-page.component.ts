import { Component, OnInit } from '@angular/core';
import {Feedback} from "../../../../classes/feedback";
import {ShareService} from "../../../../services/share.service";
import {MessageService} from "../../../../services/message.service";
import {HttpService} from "../../../../services/http.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-elder-feedbacks-page',
  templateUrl: './elder-feedbacks-page.component.html',
  styleUrls: ['./elder-feedbacks-page.component.css']
})
export class ElderFeedbacksPageComponent implements OnInit {

  allFeedbacks: Feedback[];
  feedbackToEdit: Feedback;
  isEditingFeedback: boolean;

  private showFeedbackSubscription: Subscription;
  private cancelEditingFeedbackSubscription: Subscription;

  constructor(public shareService: ShareService, private http: HttpService,
              private messageService: MessageService) {
    this.allFeedbacks = [];

    this.showFeedbackSubscription = this.shareService.showFeedbackEvent.subscribe(feedback => {
      this.feedbackToEdit = feedback;
      this.isEditingFeedback = true;
    });

    this.cancelEditingFeedbackSubscription = this.shareService.cancelEditFeedbackEvent.subscribe(res => {
      this.isEditingFeedback = false;
    })
  }

  ngOnInit() {
    this.http.getAllFeedbacks().subscribe(
      feedbacksFromDb => {
        for (let fbFromDb of feedbacksFromDb) {
          let feedback = fbFromDb;
          feedback.dateOfWriting = new Date(fbFromDb.dateOfWriting);
          this.allFeedbacks.push(feedback);
        }
      }
    );

  }

  ngOnDestroy() {
    this.showFeedbackSubscription.unsubscribe();
    this.cancelEditingFeedbackSubscription.unsubscribe();
  }

}
