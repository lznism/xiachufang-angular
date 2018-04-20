import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '../interface/response';

@Injectable()
export class CategoryItemService {

  constructor(private http: HttpClient) {}

  getCategoryItem(id: number, type: string = 'pop'): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`/api/category-item-list?id=${id}&type=${type}`);
  }
}
