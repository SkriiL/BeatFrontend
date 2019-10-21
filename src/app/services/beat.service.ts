import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {Beat} from '../models/beat';

@Injectable({
  providedIn: 'root'
})
export class BeatService {

  constructor(
    private http: HttpService,
  ) { }

  getAll() {
    return this.http.get('beats/all');
  }

  create(beat: Beat) {
    return this.http.post('beats/create', beat).subscribe();
  }

  edit(beat: Beat) {
    return this.http.post('beats/edit', beat).subscribe();
  }

  deleteById(id: number) {
    return this.http.post('beats/delete', id).subscribe();
  }
}
