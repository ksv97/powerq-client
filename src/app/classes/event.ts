import {User} from "./user";
export class Event {
  id: number;
  date: Date;
  title: string;
  description: string;
  isDeadline: boolean;
  users: User[];
  author: User;

  constructor (author: User) {
      this.date = new Date();
      this.users = [];
      this.isDeadline = false;
      this.author = author;
  }

}
