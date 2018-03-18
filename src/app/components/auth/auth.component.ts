import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  auth() {
    switch (this.username) {
      case "curator": this.router.navigate(['/curator']); break;
      case "elder": this.router.navigate(['/elder']); break;
      case "admin": this.router.navigate(['/admin']); break;
      default: console.warn("Incorrect login");
    }
  }

}
