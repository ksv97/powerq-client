import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Event} from '../../classes/event'
import {ShareService} from "../../services/share.service";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() editEvent: Event;
  private editedEvent: Event;

  model: NgbDateStruct;
  time = {hour: 13, minute: 30};

  constructor(public shareService: ShareService) {
    this.editedEvent = new Event();
  }

  ngOnInit() {
    this.editedEvent.date = new Date(this.editEvent.date);
    this.editedEvent.id = this.editEvent.id;
    this.editedEvent.description = this.editEvent.description;
    this.editedEvent.title = this.editEvent.title;
    this.editedEvent.users = this.editEvent.users;

    this.model = {
      year: this.editedEvent.date.getFullYear(),
      month: this.editedEvent.date.getMonth() + 1,
      day: this.editedEvent.date.getDate()
    };

    this.time = {
      hour: this.editedEvent.date.getHours(),
      minute: this.editedEvent.date.getMinutes()
    };

    console.log(this.model);
  }

  saveEvent() {
    if (this.model) {
      this.editedEvent.date.setFullYear(this.model.year, this.model.month - 1, this.model.day);
    }
    this.editedEvent.date.setHours(this.time.hour, this.time.minute);
    this.shareService.confirmEditClicked(this.editedEvent);
  }

  cancelEdit() {
    this.shareService.cancelEventClicked();
  }
}
