import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from '../../classes/user'
import {HttpService} from "../../services/http.service";
import {MessageService} from "../../services/message.service";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent implements OnInit {

  user: User;

  constructor(private router: Router, private http: HttpService,
              private messageService: MessageService, private shareService: ShareService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  auth() {
    this.http.logIn(this.user).subscribe(
      existingUser => {
        this.shareService.currentUser = existingUser;

        if (this.shareService.currentUser.isAdmin == true) {
          this.router.navigate(['/admin'])
        }
        else {
          switch (this.shareService.currentUser.role.name) {
            case 'Куратор':
            {
              this.http.getCurator(existingUser.id).subscribe(
                existingCurator => {
                  this.shareService.currentCurator = existingCurator;
                  this.router.navigate(['/curator']);
                }
              );
              break;
            }
            case 'Старший куратор': {
              this.router.navigate(['/elder']);
              break;
            }
          }
        }
      }
    )
    // switch (this.username) {
    //   case "curator": this.router.navigate(['/curator']); break;
    //   case "elder": this.router.navigate(['/elder']); break;
    //   case "admin": this.router.navigate(['/admin']); break;
    //   default: console.warn("Incorrect login");
    // }
  }

  goToRegistration() {
    this.router.navigate(['/register'])
  }

}
