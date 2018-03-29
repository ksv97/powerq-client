import { Component, OnInit } from '@angular/core';
import {ShareService} from "../../../services/share.service";
import {Curator} from "../../../classes/curator";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-curator-profile',
  templateUrl: 'curator-profile.component.html',
  styleUrls: ['curator-profile.component.css']
})
export class CuratorProfileComponent implements OnInit {
  constructor(public shareService: ShareService, private http: HttpService) {

  }

  ngOnInit() {
    // console.log('onInit curatorProfile');
    // console.log(this.shareService.currentUser);
  }

}
