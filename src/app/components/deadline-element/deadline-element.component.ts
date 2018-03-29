import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-deadline-element',
  templateUrl: './deadline-element.component.html',
  styleUrls: ['./deadline-element.component.css']
})
export class DeadlineElementComponent implements OnInit {

  @Input() deadline: Event;

  constructor() { }

  ngOnInit() {
  }

  public isCollapsed1 = true;

}
