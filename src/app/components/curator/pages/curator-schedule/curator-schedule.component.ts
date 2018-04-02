import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import  {Event} from '../../../../classes/event'
import {ShareService} from "../../../../services/share.service";
import {Subscription} from "rxjs";
import {MessageService} from "../../../../services/message.service";
import {User} from "../../../../classes/user";
import {Actions} from "../../../../enums/Actions";

@Component({
  selector: 'app-curator-schedule',
  templateUrl: './curator-schedule.component.html',
  styleUrls: ['./curator-schedule.component.css']
})
export class CuratorScheduleComponent implements OnInit {

  public actions: any = Actions;
  currentAction: Actions = Actions.None;
  usersForEvent: User[] = [];
  eventForFeedback: Event;
  eventForEditing: Event;
  curatorEvents: Event[] = [];

  private addFeedbackSubscription: Subscription;
  private saveFeedbackSubscription: Subscription;
  private editEventSubscription: Subscription;
  private confirmEditEventSubscription: Subscription;
  private cancelEditEventSubscription: Subscription;

  constructor(private http: HttpService, public shareService: ShareService,
              private messageService: MessageService) {
    this.addFeedbackSubscription = this.shareService.addFeedbackEvent.subscribe( eventForFeedback => {
      this.eventForFeedback = eventForFeedback;
      this.usersForEvent.push(this.shareService.currentUser);
      this.currentAction = Actions.AddFeedback;
    });

    this.saveFeedbackSubscription = this.shareService.saveFeedbackEvent.subscribe( feedback => {
      this.http.createFeedback(feedback).subscribe(
        success => {
          this.currentAction = Actions.None;
          this.messageService.add('Отчет успешно добавлен!');
        }
      )
    });

    this.editEventSubscription = this.shareService.editEventEvent.subscribe( eventToEdit => {
      this.eventForEditing = eventToEdit;
      this.currentAction = Actions.EditEvent
    });

    this.confirmEditEventSubscription = this.shareService.confirmEditEvent.subscribe( editedEvent => {
      this.currentAction = Actions.None;
    });

    this.cancelEditEventSubscription = this.shareService.cancelEditEvent.subscribe(
      res => this.currentAction = Actions.None
    );
  }

  ngOnInit() {
    this.http.getUserEvents(this.shareService.currentUser.id).subscribe(
      events => {
        this.curatorEvents = events;
      }
    )
  }

  ngOnDestroy () {
    this.saveFeedbackSubscription.unsubscribe();
    this.addFeedbackSubscription.unsubscribe();
    this.editEventSubscription.unsubscribe();
    this.confirmEditEventSubscription.unsubscribe();
    this.cancelEditEventSubscription.unsubscribe();
  }

  saveEvent(newEvent: Event) {
    this.curatorEvents.push(newEvent);
    this.currentAction = Actions.None;
  }

  addEvent () {
    this.usersForEvent = [];
    this.usersForEvent.push(this.shareService.currentUser);
    this.currentAction = Actions.AddEvent;
  }

}
