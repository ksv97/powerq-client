import { Component, OnInit } from '@angular/core';
import {Actions} from "../../../../enums/Actions";
import {Event} from '../../../../classes/event'
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {Faculty} from "../../../../classes/faculty";

@Component({
  selector: 'app-admin-schedule-page',
  templateUrl: './admin-schedule-page.component.html',
  styleUrls: ['./admin-schedule-page.component.css']
})
export class AdminSchedulePageComponent implements OnInit {

  public actions = Actions;
  currentAction: Actions = Actions.None;
  eventsToShow: Event[];
  faculties: Faculty[] = [];
  selectedFaculty: Faculty;
  private selectedOption: number = 1; // 1 - all, 2 - faculty

  set option (value: number) {
    if (value == 1) {
      this.selectedOption = 1;
      this.getAllEvents();
    }
    else {
      this.selectedOption = 2;
      this.getFacultyEvents();
    }
  }

  get option () {
    return this.selectedOption;
  }

  constructor(private http: HttpService, private shareService: ShareService) { }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.http.getAllEvents().subscribe(
      result => this.eventsToShow = result
    );

    this.http.getFaculties().subscribe(
      result => this.faculties = result
    )
  }

  getFacultyEvents() {
    this.http.getEventsForFaculty(this.selectedFaculty.id).subscribe(
      result => this.eventsToShow = result
    )
  }

  changeFaculty() {
    if (this.selectedFaculty) {
      this.getFacultyEvents();
    }
  }

}
