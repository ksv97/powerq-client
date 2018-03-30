import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Event} from '../../classes/event'
import {HttpService} from "../../services/http.service";
import {ShareService} from "../../services/share.service";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event.component.html',
  styleUrls: ['add-event.component.css']
})
export class AddEventComponent implements OnInit {

  @Output() onEventSaved = new EventEmitter<Event>();
  @Output() onEventCanceled = new EventEmitter();
  newEvent: Event;

  model: NgbDateStruct;
  time = {hour: 13, minute: 30};

  constructor(private http: HttpService, private shareService: ShareService,
              private messageService: MessageService) {
    this.newEvent = new Event(this.shareService.currentUser);
    this.newEvent.users.push(this.shareService.currentUser);
  }

  ngOnInit() {
  }

  saveEvent() {

    if (this.model) {
      this.newEvent.date.setFullYear(this.model.year, this.model.month - 1, this.model.day);
    }
    this.newEvent.date.setHours(this.time.hour, this.time.minute);
    this.http.createEvent(this.newEvent).subscribe(
      eventId => {
        this.messageService.add('Event created successfully')
        this.newEvent.id = eventId;
      }
    );
    this.onEventSaved.emit(this.newEvent);
  }

  cancelNewEvent() {
    this.onEventCanceled.emit();
  }

}
