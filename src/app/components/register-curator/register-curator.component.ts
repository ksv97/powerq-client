import { Component, OnInit } from '@angular/core';
import {Curator} from "../../classes/curator";
import {Faculty} from "../../classes/faculty";
import {HttpService} from "../../services/http.service";
import {ShareService} from "../../services/share.service";
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-curator',
  templateUrl: './register-curator.component.html',
  styleUrls: ['./register-curator.component.css']
})
export class RegisterCuratorComponent implements OnInit {

  curator: Curator;
  faculties: Faculty[];

  constructor(private http: HttpService, private shareService: ShareService,
              private messageService: MessageService, private router: Router) {
    this.curator = new Curator();
    this.curator.user = this.shareService.newUser;
  }

  ngOnInit() {
    this.http.getFaculties().subscribe(
      result => this.faculties = result
    )
  }

  registerCurator () {
    this.http.registerCurator(this.curator).subscribe(
      result => {
        this.messageService.add(`Curator register result: ${result}`);
        this.router.navigate(['/auth']);
      }
    )
  }

}
