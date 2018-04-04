import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {User} from "../../../../classes/user";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MessageService} from "../../../../services/message.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: User[];
  idOfUserToDelete: number;

  constructor(private http: HttpService,
              private modalService: NgbModal, private messageService: MessageService) { }

  ngOnInit() {
    this.http.getAllUsers().subscribe(
      result => this.users = result
    )
  }

  openModal(content, id:number) {
    this.idOfUserToDelete = id;
    this.modalService.open(content);
  }

  deleteUser() {
    this.http.deleteUser(this.idOfUserToDelete).subscribe(
      result => {
        let oldUser = this.users.filter(i => i.id == this.idOfUserToDelete)[0];
        if (oldUser) {
          let index = this.users.indexOf(oldUser);
          if (index > -1) {
            this.users.splice(index, 1);
            this.messageService.add('Пользователь успешно удален из системы!');
          }
        }
      }
    )
  }

}
