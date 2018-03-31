import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ShareService} from "../../../../services/share.service";
import {HttpService} from "../../../../services/http.service";
import {Feedback} from "../../../../classes/feedback";

@Component({
  selector: 'app-curator-feedbacks-page',
  templateUrl: 'curator-feedbacks-page.component.html',
  styleUrls: ['curator-feedbacks-page.component.css']
})
export class CuratorFeedbacksPageComponent implements OnInit {

  allFeedbacks: Feedback[];
  feedbackToEdit: Feedback;
  isEditingFeedback: boolean;
  readonlyFeedback: boolean;

  private showFeedbackSubscription: Subscription;

  constructor(public shareService: ShareService, private http: HttpService) {
    this.allFeedbacks = [];
    this.readonlyFeedback = false;

    this.showFeedbackSubscription = this.shareService.showFeedbackEvent.subscribe(feedback => {
      this.feedbackToEdit = feedback;
      this.isEditingFeedback = true;
      this.readonlyFeedback = true;
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
    )
  }

  ngOnDestroy () {
    this.showFeedbackSubscription.unsubscribe();
  }

}
