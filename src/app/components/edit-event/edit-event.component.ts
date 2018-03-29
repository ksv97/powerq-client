import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Event} from '../../classes/event'
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() editEvent: Event;

  model: NgbDateStruct;
  time = {hour: 13, minute: 30};

  constructor(public shareService: ShareService) {

  }

  ngOnInit() {
    console.log(this.editEvent);
    this.model = {
      year: this.editEvent.date.getFullYear(),
      month: this.editEvent.date.getMonth(),
      day: this.editEvent.date.getDay()
    };

    this.time = {
      hour: this.editEvent.date.getHours(),
      minute: this.editEvent.date.getMinutes()
    }
  }

  saveEvent() {
    console.log(this.editEvent);
    this.shareService.confirmEditClicked(this.editEvent);
  }
}
