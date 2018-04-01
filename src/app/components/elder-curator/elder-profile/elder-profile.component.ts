import {Component, OnInit, Input} from '@angular/core';
import {ShareService} from "../../../services/share.service";
import {ElderCurator} from "../../../classes/elder-curator";

@Component({
  selector: 'app-elder-profile',
  templateUrl: 'elder-profile.component.html',
  styleUrls: ['elder-profile.component.css']
})
export class ElderProfileComponent implements OnInit {

  @Input() elder: ElderCurator;

  constructor(public shareService: ShareService) { }

  ngOnInit() {
  }

}
