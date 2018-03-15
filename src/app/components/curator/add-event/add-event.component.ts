import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit() {
  }

}
