import { Injectable } from '@angular/core';
import {SocketService} from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class BeatsService {

  constructor(
    private socketService: SocketService,
  ) { }

  getAll() {
    this.socketService.sendRequest('getAllBeats', '');
    return this.socketService.onEvent('allBeats');
  }
}
