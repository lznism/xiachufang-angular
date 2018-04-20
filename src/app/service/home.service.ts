import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '../interface/response';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) { }

  getHome(): Observable<HttpResponse> {
    return this.http.get<HttpResponse>('/api/home');
  }
}
