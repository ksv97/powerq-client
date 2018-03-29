import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ShareService} from "../../services/share.service";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-curator',
  templateUrl: 'curator.component.html',
  styleUrls: ['curator.component.css']
})
export class CuratorComponent implements OnInit {

  public isCollapsed = true;

  constructor(private router: Router, public shareService: ShareService) {
  }

  ngOnInit() {
    // console.log('on init Curator')
    // console.log(this.shareService.currentUser);
  }

  logout() {
    this.router.navigate(['/auth']);
  }

}
