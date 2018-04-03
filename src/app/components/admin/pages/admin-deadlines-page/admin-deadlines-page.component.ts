import { Component, OnInit } from '@angular/core';
import {Actions} from "../../../../enums/Actions";
import {Faculty} from "../../../../classes/faculty";
import {User} from "../../../../classes/user";
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {Event} from '../../../../classes/event'

@Component({
  selector: 'app-admin-deadlines-page',
  templateUrl: './admin-deadlines-page.component.html',
  styleUrls: ['./admin-deadlines-page.component.css']
})
export class AdminDeadlinesPageComponent implements OnInit {

  public actions = Actions;
  currentAction: Actions = Actions.None;
  eventsToShow: Event[];
  faculties: Faculty[] = [];
  selectedFaculty: Faculty;
  private selectedOption: number = 1; // 1 - all, 2 - faculty
  usersForEvent: User[] = [];

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

    this.http.getFaculties().subscribe(
      result => this.faculties = result
    )
  }

  getAllEvents() {
    this.http.getAllDeadlines().subscribe(
      result => this.eventsToShow = result
    );
  }

  getFacultyEvents() {
    this.http.getDeadlinesForFaculty(this.selectedFaculty.id).subscribe(
      result => this.eventsToShow = result
    )
  }

  changeFaculty() {
    if (this.selectedFaculty) {
      this.getFacultyEvents();
    }
  }

  addEventToAllUsers() {
    this.http.getAllUsers().subscribe(
      result => {
        this.usersForEvent = result;
        this.currentAction = Actions.AddEvent;
      }
    )
  }

  addEventsToAllCurators() {
    this.http.getCuratorUsers().subscribe(
      result => {
        this.usersForEvent = result;
        this.currentAction = Actions.AddEvent;
      }
    )
  }

  addEventToAllElders() {
    this.http.getElderUsers().subscribe(
      result => {
        this.usersForEvent = result;
        this.currentAction = Actions.AddEvent;
      }
    )
  }

}
