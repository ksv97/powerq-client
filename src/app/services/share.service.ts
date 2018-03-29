import { Injectable, EventEmitter } from '@angular/core';
import {User} from "../classes/user";
import {Curator} from "../classes/curator";
import {Event} from "../classes/event";

@Injectable()
export class ShareService {

  newUser: User;
  currentUser: User;
  currentCurator: Curator;

  public addFeedbackEvent: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  public addFeedbackClicked(event: Event) {
    this.addFeedbackEvent.emit(event);
  }

}
