import {Role} from './role';

export class User {
  id: number;
  login: string;
  password: string;

  firstName: string;
  surName: string;
  isAdmin: boolean;
  role: Role;

  constructor () {
    this.role = new Role();
    this.id = -1;
    this.isAdmin = false;
  }
}
