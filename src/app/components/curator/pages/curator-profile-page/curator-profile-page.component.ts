import { Component, OnInit } from '@angular/core';
import {Curator} from "../../../../classes/curator";
import {ShareService} from "../../../../services/share.service";

@Component({
  selector: 'app-curator-profile-page',
  templateUrl: './curator-profile-page.component.html',
  styleUrls: ['./curator-profile-page.component.css']
})
export class CuratorProfilePageComponent implements OnInit {

  curator: Curator;

  constructor(private shareService: ShareService) {
    this.curator = this.shareService.currentCurator;
  }

  ngOnInit() {
  }

}
