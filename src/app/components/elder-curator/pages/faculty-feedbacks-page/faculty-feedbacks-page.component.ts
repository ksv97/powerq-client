import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {Feedback} from "../../../../classes/feedback";
import {Actions} from "../../../../enums/Actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-faculty-feedbacks-page',
  templateUrl: 'faculty-feedbacks-page.component.html',
  styleUrls: ['faculty-feedbacks-page.component.css']
})
export class FacultyFeedbacksPageComponent implements OnInit {

  public actions = Actions;
  currentAction: Actions = Actions.None;
  feedbacks: Feedback[];
  showFeedbackSubscription: Subscription;
  hideFeedbackSubsciption: Subscription;
  feedbackToShow: Feedback;

  constructor(private http: HttpService, private shareService: ShareService) {
    this.showFeedbackSubscription = this.shareService.showFeedbackEvent.subscribe(
      feedback => {
        this.feedbackToShow = feedback;
        this.currentAction = Actions.EditFeedback;
      }
    );
  }

  ngOnInit() {
    this.http.getFacultyFeedbacks(this.shareService.currentElder.faculty.id).subscribe(
      result => this.feedbacks = result
    )

  }

  ngOnDestroy() {
    this.showFeedbackSubscription.unsubscribe();
  }

}
