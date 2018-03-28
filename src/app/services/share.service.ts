import { Injectable } from '@angular/core';
import {User} from "../classes/user";

@Injectable()
export class ShareService {

  newUser: User;
  currentUser: User;

  constructor() { }

}
