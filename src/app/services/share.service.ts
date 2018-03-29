import { Injectable } from '@angular/core';
import {User} from "../classes/user";
import {Curator} from "../classes/curator";

@Injectable()
export class ShareService {

  newUser: User;
  currentUser: User;
  currentCurator: Curator;

  constructor() { }

}
