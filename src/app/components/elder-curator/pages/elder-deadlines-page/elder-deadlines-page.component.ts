import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {MessageService} from "../../../../services/message.service";
import {Event} from "../../../../classes/event"

@Component({
  selector: 'app-elder-deadlines-page',
  templateUrl: './elder-deadlines-page.component.html',
  styleUrls: ['./elder-deadlines-page.component.css']
})
export class ElderDeadlinesPageComponent implements OnInit {

  elderDeadlines: Event[] = [];

  constructor(private http: HttpService, public shareService: ShareService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.http.getUserDeadlines(this.shareService.currentUser.id)
      .subscribe(
        result => this.elderDeadlines = result
      )
  }

}
