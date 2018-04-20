import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '../interface/response';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<HttpResponse> {
    return this.http.get<HttpResponse>('/api/category');
  }

}
