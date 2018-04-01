import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-elder-curator',
  templateUrl: 'elder-curator.component.html',
  styleUrls: ['elder-curator.component.css']
})
export class ElderCuratorComponent implements OnInit {


  public isCollapsed = true;

  constructor(private router: Router, public shareService: ShareService) {
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/auth']);
  }

}
