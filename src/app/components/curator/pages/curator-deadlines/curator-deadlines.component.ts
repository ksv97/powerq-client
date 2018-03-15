import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curator-deadlines',
  templateUrl: './curator-deadlines.component.html',
  styleUrls: ['./curator-deadlines.component.css']
})
export class CuratorDeadlinesComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;

  constructor() { }

  ngOnInit() {
  }

}
