import {Component, OnInit, Input} from '@angular/core';
import {Faculty} from "../../classes/faculty";

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.css']
})
export class FacultyProfileComponent implements OnInit {

  @Input() faculty: Faculty;

  constructor() { }

  ngOnInit() {
  }

}
