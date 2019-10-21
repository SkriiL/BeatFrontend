import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://127.0.0.1:56789/api/';

  get(path: string): Observable<any> {
    return this.http.get(this.url + path);
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(this.url + path, data);
  }

  put(path: string, data: any): Observable<any> {
    return this.http.put(this.url + path, data);
  }

  constructor(
    private http: HttpClient,
  ) { }
}
