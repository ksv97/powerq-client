import { Component, OnInit } from '@angular/core';
import {Faculty} from "../../../../classes/faculty";
import {ShareService} from "../../../../services/share.service";

@Component({
  selector: 'app-faculty-profile-page',
  templateUrl: './faculty-profile-page.component.html',
  styleUrls: ['./faculty-profile-page.component.css']
})
export class FacultyProfilePageComponent implements OnInit {

  faculty: Faculty;

  constructor(private shareService: ShareService) {
    this.faculty = this.shareService.currentElder.faculty;
  }

  ngOnInit() {
  }

}
