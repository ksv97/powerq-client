import {Component, OnInit, Input} from '@angular/core';
import {ShareService} from "../../../services/share.service";
import {Curator} from "../../../classes/curator";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-curator-profile',
  templateUrl: 'curator-profile.component.html',
  styleUrls: ['curator-profile.component.css']
})
export class CuratorProfileComponent implements OnInit {

  @Input() curator: Curator;

  constructor(public shareService: ShareService) {

  }

  ngOnInit() {

  }

}
