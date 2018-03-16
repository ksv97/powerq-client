import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-curator',
  templateUrl: 'curator.component.html',
  styleUrls: ['curator.component.css']
})
export class CuratorComponent implements OnInit {

  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/auth']);
  }

}
