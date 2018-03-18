import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-elder-curator',
  templateUrl: 'elder-curator.component.html',
  styleUrls: ['elder-curator.component.css']
})
export class ElderCuratorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/auth']);
  }

}
