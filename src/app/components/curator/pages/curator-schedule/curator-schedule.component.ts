import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import  {Event} from '../../../../classes/event'
import {ShareService} from "../../../../services/share.service";
import {Subscription} from "rxjs";
import {MessageService} from "../../../../services/message.service";

@Component({
  selector: 'app-curator-schedule',
  templateUrl: './curator-schedule.component.html',
  styleUrls: ['./curator-schedule.component.css']
})
export class CuratorScheduleComponent implements OnInit {

  eventForFeedback: Event;
  eventForEditing: Event;
  curatorEvents: Event[] = [];
  isAddingEvent: boolean = false;
  isAddingFeedback: boolean = false;
  isEditingEvent: boolean = false;

  private addFeedbackSubscription: Subscription;
  private saveFeedbackSubscription: Subscription;
  private editEventSubscription: Subscription;
  private confirmEditEventSubscription: Subscription;
  private cancelEditEventSubscription: Subscription;
  // private deleteEventSubscription: Subscription;

  constructor(private http: HttpService, public shareService: ShareService,
              private messageService: MessageService) {
    this.addFeedbackSubscription = this.shareService.addFeedbackEvent.subscribe( eventForFeedback => {
      this.eventForFeedback = eventForFeedback;
      this.isAddingFeedback = true;
    });

    this.saveFeedbackSubscription = this.shareService.saveFeedbackEvent.subscribe( feedback => {
      this.http.createFeedback(feedback).subscribe(
        success => {
          this.isAddingFeedback = false;
          this.messageService.add('Отчет успешно добавлен!');
        }
      )
    });

    this.editEventSubscription = this.shareService.editEventEvent.subscribe( eventToEdit => {
      this.eventForEditing = eventToEdit;
      this.isEditingEvent = true;
    });

    this.confirmEditEventSubscription = this.shareService.confirmEditEvent.subscribe( editedEvent => {
      // let indexOfOldEvent = this.curatorEvents.indexOf(editedEvent.id);
      // this.curatorEvents[indexOfOldEvent] = editedEvent;
      this.isEditingEvent = false;
    });

    this.cancelEditEventSubscription = this.shareService.cancelEditEvent.subscribe(
      res => this.isEditingEvent = false
    );

    // this.deleteEventSubscription = this.shareService.deleteEventEvent.subscribe(deletedEventId => {
    //   let eventToDelete: Event = this.curatorEvents.filter(i => i.id == deletedEventId)[0];
    //   if (eventToDelete) {
    //     let indexToDelete: number = this.curatorEvents.indexOf(eventToDelete);
    //     if (indexToDelete > -1) {
    //       this.curatorEvents.splice(indexToDelete, 1);
    //     }
    //   }
    // })
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

  ngOnDestroy () {
    this.saveFeedbackSubscription.unsubscribe();
    this.addFeedbackSubscription.unsubscribe();
    this.editEventSubscription.unsubscribe();
    this.confirmEditEventSubscription.unsubscribe();
  }

  saveEvent(newEvent: Event) {
    this.curatorEvents.push(newEvent);
    this.isAddingEvent = false;
  }

}
