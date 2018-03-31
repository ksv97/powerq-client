import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ShareService} from "../../../../services/share.service";
import {HttpService} from "../../../../services/http.service";
import {Feedback} from "../../../../classes/feedback";
import {MessageService} from "../../../../services/message.service";

@Component({
  selector: 'app-curator-feedbacks-page',
  templateUrl: 'curator-feedbacks-page.component.html',
  styleUrls: ['curator-feedbacks-page.component.css']
})
export class CuratorFeedbacksPageComponent implements OnInit {

  allFeedbacks: Feedback[];
  feedbackToEdit: Feedback;
  isEditingFeedback: boolean;
  readonlyFeedback: boolean;

  private showFeedbackSubscription: Subscription;
  private updateFeedbackSubscription: Subscription;

  constructor(public shareService: ShareService, private http: HttpService,
              private messageService: MessageService) {
    this.allFeedbacks = [];
    this.readonlyFeedback = false;

    this.showFeedbackSubscription = this.shareService.showFeedbackEvent.subscribe(feedback => {
      this.feedbackToEdit = feedback;
      this.isEditingFeedback = true;
      this.readonlyFeedback = true;
    });

    this.updateFeedbackSubscription = this.shareService.updateFeedbackEvent
      .subscribe(updatedFeedback => {
        this.http.updateFeedback(updatedFeedback).subscribe(
          _ => {
            this.isEditingFeedback = false;
            this.readonlyFeedback = false;
            this.messageService.add('Отчет успешно обновлен!');
          }
        )
      })

  }

  ngOnInit() {
    this.http.getAllFeedbacks().subscribe(
      feedbacksFromDb => {
        for (let fbFromDb of feedbacksFromDb) {
          let feedback = fbFromDb;
          feedback.dateOfWriting = new Date(fbFromDb.dateOfWriting);
          this.allFeedbacks.push(feedback);
        }
      }
    )
  }

  ngOnDestroy () {
    this.showFeedbackSubscription.unsubscribe();
  }

}
