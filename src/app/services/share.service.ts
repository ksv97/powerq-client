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
  public showFeedbackEvent: EventEmitter<Feedback> = new EventEmitter();
  public updateFeedbackEvent: EventEmitter<Feedback> = new EventEmitter();
  public deleteFeedbackEvent: EventEmitter<{eventId: number, userId: number}> = new EventEmitter();
  public editEventEvent: EventEmitter<Event> = new EventEmitter<Event>();
  public confirmEditEvent: EventEmitter<Event> = new EventEmitter<Event>();
  public deleteEventEvent: EventEmitter<number> = new EventEmitter<number>();
  public cancelEditEvent: EventEmitter<any> = new EventEmitter();

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

  public deleteEventConfirmed (deletedEventID: number) {
    this.deleteEventEvent.emit(deletedEventID);
  }

  public cancelEventClicked() {
    this.cancelEditEvent.emit(1);
  }

  public showFeedbackDetails (feedback: Feedback) {
    this.showFeedbackEvent.emit(feedback);
  }
}
