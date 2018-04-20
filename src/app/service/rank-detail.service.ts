import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '../interface/response';

@Injectable()
export class RankDetailService {

  constructor(private http: HttpClient) { }

  getRankDetail(type: string): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`/api/explore/${type}`)
  }

}
