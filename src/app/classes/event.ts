import {User} from "./user";
export class Event {
  id: number;
  date: Date;
  title: string;
  description: string;
  isDeadline: boolean;
  users: User[];

  constructor () {
      this.date = new Date();
      this.users = [];
  }

}
