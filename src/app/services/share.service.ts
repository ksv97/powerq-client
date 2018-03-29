import { Injectable, EventEmitter } from '@angular/core';
import {User} from "../classes/user";
import {Curator} from "../classes/curator";
import {Event} from "../classes/event";
import {Feedback} from "../classes/feedback";

@Injectable()
export class ShareService {

  newUser: User;
  currentUser: User;
  currentCurator: Curator;

  public addFeedbackEvent: EventEmitter<Event> = new EventEmitter();
  public saveFeedbackEvent: EventEmitter<Feedback> = new EventEmitter();
  public editEventEvent: EventEmitter<Event> = new EventEmitter<Event>();
  public confirmEditEvent: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  public addFeedbackClicked(event: Event) {
    this.addFeedbackEvent.emit(event);
  }

  public saveFeedbackClicked(feedback: Feedback) {
    this.saveFeedbackEvent.emit(feedback);
  }

  public editEventClicked(eventToEdit: Event) {
    this.editEventEvent.emit(eventToEdit);
  }

  public confirmEditClicked(editedEvent: Event) {
    this.confirmEditEvent.emit(editedEvent);
  }
}
