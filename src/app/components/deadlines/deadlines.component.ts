import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.css']
})
export class DeadlinesComponent implements OnInit {

  @Input() deadlines: Event[];

  constructor() {
  }

  ngOnInit() {
  }

}
