import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {ShareService} from "../../../../services/share.service";
import {MessageService} from "../../../../services/message.service";
import {Event} from "../../../../classes/event"

@Component({
  selector: 'app-curator-deadlines',
  templateUrl: './curator-deadlines.component.html',
  styleUrls: ['./curator-deadlines.component.css']
})
export class CuratorDeadlinesComponent implements OnInit {

  curatorDeadlines: Event[] = [];

  constructor(private http: HttpService, public shareService: ShareService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.http.getUserDeadlines(this.shareService.currentUser.id)
      .subscribe(
        result => this.curatorDeadlines = result
      )
  }

}
