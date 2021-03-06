import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Event} from '../../classes/event'
import {HttpService} from "../../services/http.service";
import {ShareService} from "../../services/share.service";
import {MessageService} from "../../services/message.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event.component.html',
  styleUrls: ['add-event.component.css']
})
export class AddEventComponent implements OnInit {

  @Input() isDeadline: boolean;
  @Input() users: User[];
  @Output() onEventSaved = new EventEmitter<Event>();
  @Output() onEventCanceled = new EventEmitter();
  newEvent: Event;

  model: NgbDateStruct;
  time = {hour: 13, minute: 30};

  constructor(private http: HttpService, private shareService: ShareService,
              private messageService: MessageService) {
    this.newEvent = new Event(this.shareService.currentUser);
  }

  ngOnInit() {
    for (let user of this.users) {
      this.newEvent.users.push(user);
    }
    this.newEvent.isDeadline = this.isDeadline;
  }

  saveEvent() {

    if (this.model) {
      this.newEvent.date.setFullYear(this.model.year, this.model.month - 1, this.model.day);
    }
    this.newEvent.date.setHours(this.time.hour, this.time.minute);
    this.http.createEvent(this.newEvent).subscribe(
      eventId => {
        let message = this.newEvent.isDeadline ? 'Дедлайн успешно добавлен' : 'Мероприятие успешно добавлено';
        this.messageService.add(message);
        this.newEvent.id = eventId;
      }
    );
    this.onEventSaved.emit(this.newEvent);
  }

  cancelNewEvent() {
    this.onEventCanceled.emit();
  }

}
