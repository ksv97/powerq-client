import { Component, OnInit } from '@angular/core';
import {Curator} from "../../../../classes/curator";
import {Event} from "../../../../classes/event";
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {Actions} from "../../../../enums/Actions";
import {User} from "../../../../classes/user";

@Component({
  selector: 'app-faculty-schedule-page',
  templateUrl: './faculty-schedule-page.component.html',
  styleUrls: ['./faculty-schedule-page.component.css']
})
export class FacultySchedulePageComponent implements OnInit {

  public actions: any = Actions;
  usersAssignedToEvent: User[];
  currentAction: Actions = Actions.None;
  scheduleForAllCurators: boolean = true;
  facultyCurators: Curator[];
  selectedCurator: Curator;
  scheduleForWatch: Event[];

  constructor(private http: HttpService, private shareService: ShareService) { }

  ngOnInit() {
    this.http.getEventsForFaculty(this.shareService.currentElder.faculty.id).subscribe(
      result => this.scheduleForWatch = result
    )
    this.http.getCuratorsFromFaculty(this.shareService.currentElder.faculty.id).subscribe(
      result => this.facultyCurators = result
    );
  }

  loadScheduleForCurator() {
    this.http.getUserEvents(this.selectedCurator.user.id).subscribe(
      result => this.scheduleForWatch = result
    )
  }

  addEventForWholeFaculty() {
    this.usersAssignedToEvent = [];
    for (let curator of this.facultyCurators) {
      this.usersAssignedToEvent.push(curator.user);
    }
    this.currentAction = Actions.AddEvent;
  }

}
