import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '../interface/response';

@Injectable()
export class MenuItemService {
  constructor(private http: HttpClient) { }

  getMenuDetail(id: number): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`/api/detail/${id}`);
  }
}
