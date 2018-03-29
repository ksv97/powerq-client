import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import  {Event} from '../../../../classes/event'
import {ShareService} from "../../../../services/share.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-curator-schedule',
  templateUrl: './curator-schedule.component.html',
  styleUrls: ['./curator-schedule.component.css']
})
export class CuratorScheduleComponent implements OnInit {

  eventForFeedback: Event;
  curatorEvents: Event[] = [];
  isAddingEvent: boolean = false;
  isAddingFeedback: boolean = false;

  private addFeedbackSubscription: Subscription;
  private saveFeedbackSubscription: Subscription;

  constructor(private http: HttpService, public shareService: ShareService) {
    this.addFeedbackSubscription = this.shareService.addFeedbackEvent.subscribe( eventForFeedback => {
      this.isAddingFeedback = true;
      this.eventForFeedback = eventForFeedback;
    });

    this.saveFeedbackSubscription = this.shareService.saveFeedbackEvent.subscribe( feedback => {
      this.isAddingFeedback = false;
      console.log(feedback);
    })
  }

  ngOnInit() {
    this.http.getEvents(this.shareService.currentUser.id).subscribe(
      events =>
      {
        this.curatorEvents = events;
        console.warn(events);
      }
    )
  }

  saveEvent(newEvent: Event) {
    this.curatorEvents.push(newEvent);
    this.isAddingEvent = false;
  }

}
