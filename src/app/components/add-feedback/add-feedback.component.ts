import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../classes/event'
import {ShareService} from "../../services/share.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-feedback',
  templateUrl: 'add-feedback.component.html',
  styleUrls: ['add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  @Input() eventForFeedback: Event;


  questions: string[];

  constructor(private shareService: ShareService) {
    this.questions = ["Как было общее впечатление о вас?", "Что проводили и как?", "Какую оценку бы поставили сами себе?"];
  }

  ngOnInit() {
  }

}
