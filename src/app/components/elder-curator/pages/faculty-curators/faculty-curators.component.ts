import { Component, OnInit } from '@angular/core';
import {Curator} from "../../../../classes/curator";
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {Actions} from "../../../../enums/Actions"
import {User} from "../../../../classes/user";

@Component({
  selector: 'app-faculty-curators',
  templateUrl: './faculty-curators.component.html',
  styleUrls: ['./faculty-curators.component.css']
})
export class FacultyCuratorsComponent implements OnInit {

  usersAssignedToEvent: User[] = [];
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
    console.log(curator);
    this.usersAssignedToEvent = [];
    this.usersAssignedToEvent.push(curator.user);
    this.activeAction = Actions.AddEvent;
  }

  cancelEvent() {
    this.activeAction = Actions.None;
  }

  saveEvent() {
    this.activeAction = Actions.None;
  }

}
