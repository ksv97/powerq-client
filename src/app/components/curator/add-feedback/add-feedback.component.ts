import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  questions: string[];

  constructor() {
    this.questions = ["Как было общее впечатление о вас?", "Что проводили и как?", "Какую оценку бы поставили сами себе?"];
  }

  ngOnInit() {
  }

}
