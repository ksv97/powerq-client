import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-curator',
  templateUrl: 'curator.component.html',
  styleUrls: ['curator.component.css']
})
export class CuratorComponent implements OnInit {

  public isCollapsed = true;

  constructor(private router: Router, public shareService: ShareService) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/auth']);
  }

}
