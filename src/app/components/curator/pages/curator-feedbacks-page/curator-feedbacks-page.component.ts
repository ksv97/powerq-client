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

  feedbacks: Feedback[];

  private saveFeedbackSubscription: Subscription;

  constructor(public shareService: ShareService, private http: HttpService) {
    this.saveFeedbackSubscription = this.shareService.saveFeedbackEvent.subscribe(feedback => {
      this.feedbacks.push(feedback);
    })
  }

  ngOnInit() {

  }

  ngOnDestroy () {
    this.saveFeedbackSubscription.unsubscribe();
  }

}
