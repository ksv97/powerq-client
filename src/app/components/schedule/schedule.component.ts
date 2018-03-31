import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../classes/event'
import {Subscription} from "rxjs";
import {ShareService} from "../../services/share.service";
import {HttpService} from "../../services/http.service";
import {MessageService} from "../../services/message.service";



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() events: Event[];

  private confirmEditEventSubscription: Subscription;
  private deleteEventSubscription: Subscription;
  private saveFeedbackSubscription: Subscription;

  constructor(private shareService: ShareService, private http: HttpService,
              private messageService: MessageService) {
    this.events = [];

    this.confirmEditEventSubscription = this.shareService.confirmEditEvent
      .subscribe( editedEvent => { this.editEvent(editedEvent)});

    this.deleteEventSubscription = this.shareService.deleteEventEvent
      .subscribe(deletedEventId => this.deleteEvent(deletedEventId))

    this.saveFeedbackSubscription = this.shareService.saveFeedbackEvent
      .subscribe(feedback => {
       this.deleteEventFromArray(feedback.event.id);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.deleteEventSubscription.unsubscribe();
    this.confirmEditEventSubscription.unsubscribe();
  }

  deleteEvent(deletedEventId: number) {
    this.http.deleteEvent(deletedEventId).subscribe(
      result => {
        this.messageService.add('Мероприятие успешно удалено!');
        this.deleteEventFromArray(deletedEventId);
      })
  }

  deleteEventFromArray (eventId: number) {
    let eventToDelete: Event = this.events.filter(i => i.id == eventId)[0];
    if (eventToDelete) {
      let indexToDelete: number = this.events.indexOf(eventToDelete);
      if (indexToDelete > -1) {
        this.events.splice(indexToDelete, 1);
      }
    }
  }

  editEvent (editedEvent: Event) {
    this.http.updateEvent(editedEvent)
      .subscribe(result => {

        let eventToSubstitute: Event = this.events.filter(e => e.id == editedEvent.id)[0];
        if (eventToSubstitute) {
          let indexOfOldEvent = this.events.indexOf(eventToSubstitute);
          if (indexOfOldEvent > -1) {
            this.events[indexOfOldEvent] = editedEvent;
            this.messageService.add('Мероприятие успешно изменено!');
          }
          else this.messageService.add('Event with id not found');

        }
        else this.messageService.add('Event with id not found');
      })

  }

}
