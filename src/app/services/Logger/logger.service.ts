import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  messages: String[] = [];

  log(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
