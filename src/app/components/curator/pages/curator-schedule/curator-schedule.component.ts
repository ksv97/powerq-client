import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curator-schedule',
  templateUrl: './curator-schedule.component.html',
  styleUrls: ['./curator-schedule.component.css']
})
export class CuratorScheduleComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;

  constructor() { }

  ngOnInit() {
  }

}
