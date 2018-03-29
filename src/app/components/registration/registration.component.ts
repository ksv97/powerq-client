import { Component, OnInit } from '@angular/core';
import {Role} from "../../classes/role";
import {User} from "../../classes/user";
import {HttpService} from "../../services/http.service";
import {MessageService} from "../../services/message.service";
import { ShareService} from "../../services/share.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedRoleName: string;
  roles: Role[];
  user: User;

  constructor(private http: HttpService, private share: ShareService, private messageService: MessageService, private router: Router) {
    this.user = new User();

  }

  ngOnInit() {
    this.http.getRoles().subscribe(
      result => this.roles = result
    );
  }

  checkLoginOfUser () {
    this.http.checkLoginOfUser(this.user).subscribe(
      result => {
        this.messageService.add('Login check: ' + result);
        if (result == true) {
          this.share.newUser = this.user;
          switch (this.user.role.name) {
            case 'Куратор': this.router.navigate(['/register-curator']); break;
            case 'Старший куратор': this.router.navigate(['/register-elder']); break;
          }
      }
      }
    )
  }

}
