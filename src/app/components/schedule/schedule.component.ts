import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../classes/event'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() events: Event[];

  constructor() {
    this.events = [];
  }

  ngOnInit() {
  }

}
