import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-feedback',
  templateUrl: './edit-feedback.component.html',
  styleUrls: ['./edit-feedback.component.css']
})
export class EditFeedbackComponent implements OnInit {

  questions: string[];
  answers: string[];

  constructor() {
    this.questions = ["Как было общее впечатление о вас?", "Что проводили и как?", "Какую оценку бы поставили сами себе?"];
    this.answers = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla non nunc et hendrerit. Vivamus sed iaculis turpis. Fusce dictum et erat id imperdiet. Sed massa lacus, lacinia quis dictum in, volutpat eu elit. Morbi eget facilisis sapien. Nulla et ante sit amet nunc tempor sodales. Curabitur dictum leo vel felis faucibus, et hendrerit lacus accumsan. Fu",
    "Ut non gravida eros, vitae gravida velit. Vestibulum nunc dui, auctor ac augue sed, egestas venenatis erat. Suspendisse eu sagittis augue. Integer at lobortis elit, eget gravida eros. Pellentesque venenatis dictum est, sed pellentesque leo. In quis tincidunt metus, quis rhoncus diam. Aenean mollis semper pellentesque. Proin",
    "n placerat dolor sed imperdiet sodales. Etiam congue pellentesque massa at auctor. Suspendisse condimentum, turpis efficitur eleifend tincidunt, metus enim accumsan nibh, vitae posuere libero enim vi"]
  }

  ngOnInit() {
  }

}
