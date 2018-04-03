import { Component, OnInit } from '@angular/core';
import {Actions} from "../../../../enums/Actions";
import {Faculty} from "../../../../classes/faculty";
import {Feedback} from "../../../../classes/feedback";
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-feedbacks-page',
  templateUrl: './admin-feedbacks-page.component.html',
  styleUrls: ['./admin-feedbacks-page.component.css']
})
export class AdminFeedbacksPageComponent implements OnInit {

  public actions = Actions;
  currentAction: Actions = Actions.None;
  feedbacks: Feedback[];
  feedbackToEdit: Feedback;
  faculties: Faculty[] = [];
  selectedFaculty: Faculty;
  private selectedOption: number = 1; // 1 - all, 2 - faculty

  private showFeedbackSubscription: Subscription;
  private cancelFeedbackSubscription: Subscription;

  set option (value: number) {
    if (value == 1) {
      this.selectedOption = 1;
      this.getAllFeedbacks();
    }
    else {
      this.selectedOption = 2;
      this.getFacultyFeedbacks();
    }
  }

  get option () {
    return this.selectedOption;
  }

  constructor(private http: HttpService, private shareService: ShareService) {
    this.showFeedbackSubscription = this.shareService.showFeedbackEvent.subscribe(feedback => {
      this.feedbackToEdit = feedback;
      this.currentAction = Actions.EditFeedback;
    });

    this.cancelFeedbackSubscription = this.shareService.cancelEditFeedbackEvent.subscribe( param => {
      this.currentAction = Actions.None;
    })
  }

  ngOnInit() {
    this.getAllFeedbacks();

    this.http.getFaculties().subscribe(
      result => this.faculties = result
    )
  }

  ngOnDestroy() {
    this.showFeedbackSubscription.unsubscribe();
    this.cancelFeedbackSubscription.unsubscribe();
  }

  getAllFeedbacks() {
    this.http.getAllFeedbacks().subscribe(
      result => this.feedbacks = result
    );


  }

  getFacultyFeedbacks() {
    this.http.getFacultyFeedbacks(this.selectedFaculty.id).subscribe(
      result => this.feedbacks = result
    )
  }

  changeFaculty() {
    if (this.selectedFaculty) {
      this.getFacultyFeedbacks();
    }
  }

}
