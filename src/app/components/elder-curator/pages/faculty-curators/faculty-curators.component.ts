import { Component, OnInit } from '@angular/core';
import {Curator} from "../../../../classes/curator";
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {Actions} from "../../../../enums/Actions"
import {User} from "../../../../classes/user";
import {Event} from "../../../../classes/event";

@Component({
  selector: 'app-faculty-curators',
  templateUrl: './faculty-curators.component.html',
  styleUrls: ['./faculty-curators.component.css']
})
export class FacultyCuratorsComponent implements OnInit {

  newEventIsDeadline: boolean = false;
  usersAssignedToEvent: User[] = [];
  curatorSchedule: Event[] = [];
  public actions = Actions;
  activeAction: Actions = Actions.None;
  facultyCurators: Curator[] = [];
  curatorForProfile: Curator;

  constructor(private http: HttpService, private shareService: ShareService) {

  }

  ngOnInit() {
    this.http.getCuratorsFromFaculty(this.shareService.currentElder.faculty.id).subscribe(
      curators => this.facultyCurators = curators
    )
  }

  watchProfile(curator: Curator) {
    console.log('showProfile');
    this.curatorForProfile = curator;
    this.activeAction = Actions.ShowProfile;
  }

  addEventToCurator(curator: Curator) {
    this.assignCuratorToUsersForNewEvent(curator);
    this.newEventIsDeadline = false;
    this.activeAction = Actions.AddEvent;
  }

  addDeadlineToCurator(curator: Curator) {
    this.assignCuratorToUsersForNewEvent(curator);
    this.newEventIsDeadline = true;
    this.activeAction = Actions.AddDeadline;
  }

  assignCuratorToUsersForNewEvent(curator: Curator) {
    this.usersAssignedToEvent = [];
    this.usersAssignedToEvent.push(curator.user);
  }

  cancelEvent() {
    this.activeAction = Actions.None;
  }

  saveEvent() {
    this.activeAction = Actions.None;
  }

  watchCuratorSchedule(curator: Curator) {
    this.http.getUserEvents(curator.user.id).subscribe(
      events => this.curatorSchedule = events
    );
    this.activeAction = Actions.ShowCuratorSchedule;
  }

  watchCuratorDeadlines(curator: Curator) {
    this.http.getUserDeadlines(curator.user.id).subscribe(
      events => this.curatorSchedule = events
    );

    this.activeAction = Actions.ShowCuratorSchedule;
  }

  addEventForWholeFaculty() {
    this.usersAssignedToEvent = [];
    for (let curator of this.facultyCurators) {
      this.usersAssignedToEvent.push(curator.user);
    }
    this.newEventIsDeadline = false;
    this.activeAction = Actions.AddEvent;
  }

  addDeadlineForWholeFaculty() {
    this.usersAssignedToEvent = [];
    for (let curator of this.facultyCurators) {
      this.usersAssignedToEvent.push(curator.user);
    }
    this.newEventIsDeadline = true;
    this.activeAction = Actions.AddEvent;
  }

}
