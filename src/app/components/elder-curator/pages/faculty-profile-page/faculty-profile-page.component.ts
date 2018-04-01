import { Component, OnInit } from '@angular/core';
import {Faculty} from "../../../../classes/faculty";
import {ShareService} from "../../../../services/share.service";
import {HttpService} from "../../../../services/http.service";

@Component({
  selector: 'app-faculty-profile-page',
  templateUrl: './faculty-profile-page.component.html',
  styleUrls: ['./faculty-profile-page.component.css']
})
export class FacultyProfilePageComponent implements OnInit {

  faculty: Faculty;

  constructor(private shareService: ShareService, private http: HttpService) {
    // this.faculty = this.shareService.currentElder.faculty;
  }

  ngOnInit() {
    this.http.getFaculty(this.shareService.currentElder.faculty.id).subscribe(
      result => this.faculty = result
    )
  }

}
