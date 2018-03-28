import { Component, OnInit } from '@angular/core';
import {Curator} from "../../classes/curator";
import {Faculty} from "../../classes/faculty";

@Component({
  selector: 'app-register-curator',
  templateUrl: './register-curator.component.html',
  styleUrls: ['./register-curator.component.css']
})
export class RegisterCuratorComponent implements OnInit {

  curator: Curator;
  faculties: Faculty[];

  constructor() { }

  ngOnInit() {
  }

}
