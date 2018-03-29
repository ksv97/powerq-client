import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../classes/event'
import {ShareService} from "../../services/share.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-schedule-element',
  templateUrl: './schedule-element.component.html',
  styleUrls: ['./schedule-element.component.css']
})
export class ScheduleElementComponent implements OnInit {

  @Input() event: Event;

  constructor(private shareService: ShareService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  addFeedback() {
    this.shareService.addFeedbackClicked(this.event);
  }

  editEvent() {
    this.shareService.editEventClicked(this.event);
  }

  openModal(content) {
   this.modalService.open(content)

  }

  public isCollapsed1 = true;

}
