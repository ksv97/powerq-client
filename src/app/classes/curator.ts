import {User} from "./user";
import {Faculty} from "./faculty";
export class Curator {
  id: number;
  user: User;
  faculty:  Faculty;
  curatedGroups: string;
  mark: number;

  constructor () {
    this.user = new User();
    this.faculty = new Faculty();
    this.id = -1;
  }
}
