import {Component, OnInit, Input} from '@angular/core';
import {Feedback} from "../../classes/feedback";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-all-feedbacks',
  templateUrl: 'all-feedbacks.component.html',
  styleUrls: ['all-feedbacks.component.css']
})
export class AllFeedbacksComponent implements OnInit {

  @Input() feedbacks: Feedback[];

  constructor(private shareService: ShareService) { }

  ngOnInit() {
  }

  showFeedbackDetails(feedback: Feedback) {
    this.shareService.showFeedbackDetails(feedback);
  }

}
