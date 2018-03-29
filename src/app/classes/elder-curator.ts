import {User} from "./user";
import {Faculty} from "./faculty";
export class ElderCurator {
  id: number;
  user: User;
  faculty:  Faculty;

  constructor () {
    this.user = new User();
    this.faculty = new Faculty();
    this.id = -1;
  }
}
