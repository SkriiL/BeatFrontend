import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BeatTypeService {

  constructor(
    private http: HttpService,
  ) { }

  getAll() {
    return this.http.get('beatTypes/all');
  }
}
