import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-deadline',
  templateUrl: './add-deadline.component.html',
  styleUrls: ['./add-deadline.component.css']
})
export class AddDeadlineComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit() {
  }

}
