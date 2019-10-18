import { Injectable } from '@angular/core';
import {SocketService} from './socket.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private socketService: SocketService,
  ) { }

  create(user: User) {
    const str = user.name + '|' + user.email;
    this.socketService.sendRequest('createUser', str);
  }
}
