import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {

    this.messages.push(message);
    setTimeout( _ => this.clear(), 2000);
  }

  clear() {
    this.messages = [];
  }
}
