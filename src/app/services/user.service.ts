import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpService,
  ) { }

  create(user: User) {
    return this.http.post('users/create', user).subscribe();
  }
}
