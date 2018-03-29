import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../classes/event'
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-schedule-element',
  templateUrl: './schedule-element.component.html',
  styleUrls: ['./schedule-element.component.css']
})
export class ScheduleElementComponent implements OnInit {

  @Input() event: Event;

  constructor(private shareService: ShareService) { }

  ngOnInit() {
  }

  addFeedback() {
    this.shareService.addFeedbackClicked(this.event);
  }

  public isCollapsed1 = true;

}
