import { Component, OnInit } from '@angular/core';
import {Faculty} from "../../classes/faculty";
import {ElderCurator} from "../../classes/elder-curator";
import {HttpService} from "../../services/http.service";
import {MessageService} from "../../services/message.service";
import {ShareService} from "../../services/share.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-elder',
  templateUrl: './register-elder.component.html',
  styleUrls: ['./register-elder.component.css']
})
export class RegisterElderComponent implements OnInit {

  elder: ElderCurator;
  faculties: Faculty[];

  constructor(private http: HttpService, private shareService: ShareService,
              private messageService: MessageService, private router: Router) {
    this.elder = new ElderCurator();
    this.elder.user = this.shareService.newUser;
  }

  ngOnInit() {
    this.http.getFaculties().subscribe(
      result => this.faculties = result
    )
  }

  registerElder () {
    this.http.registerElder(this.elder).subscribe(
      result => {
        this.messageService.add(`Регистрация прошла успешно!`);
        this.router.navigate(['/auth']);
      }
    )
  }

}
