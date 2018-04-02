import { Component, OnInit } from '@angular/core';
import {Actions} from "../../../../enums/Actions";
import {User} from "../../../../classes/user";
import {Event} from "../../../../classes/event";
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {MessageService} from "../../../../services/message.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-elder-schedule-page',
  templateUrl: './elder-schedule-page.component.html',
  styleUrls: ['./elder-schedule-page.component.css']
})
export class ElderSchedulePageComponent implements OnInit {

  public actions: any = Actions;
  currentAction: Actions = Actions.None;
  usersForEvent: User[] = [];
  eventForEditing: Event;
  elderEvents: Event[] = [];
  private editEventSubscription: Subscription;
  private confirmEditEventSubscription: Subscription;
  private cancelEditEventSubscription: Subscription;

  constructor(private http: HttpService, public shareService: ShareService,
              private messageService: MessageService) {
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
      result => this.elderEvents = result
    )
  }

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
    this.confirmEditEventSubscription.unsubscribe();
    this.cancelEditEventSubscription.unsubscribe();
  }

  saveEvent(newEvent: Event) {
    this.elderEvents.push(newEvent);
    this.currentAction = Actions.None;
  }

  addEvent () {
    this.usersForEvent = [];
    this.usersForEvent.push(this.shareService.currentUser);
    this.currentAction = Actions.AddEvent;
  }

}
