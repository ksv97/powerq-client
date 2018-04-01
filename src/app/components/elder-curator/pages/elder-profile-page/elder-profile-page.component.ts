import { Component, OnInit } from '@angular/core';
import {ElderCurator} from "../../../../classes/elder-curator";
import {ShareService} from "../../../../services/share.service";

@Component({
  selector: 'app-elder-profile-page',
  templateUrl: './elder-profile-page.component.html',
  styleUrls: ['./elder-profile-page.component.css']
})
export class ElderProfilePageComponent implements OnInit {

  elder: ElderCurator;

  constructor(private shareService: ShareService) {
    this.elder = this.shareService.currentElder;
  }

  ngOnInit() {
  }

}
