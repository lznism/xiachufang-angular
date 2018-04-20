import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '../interface/response';

@Injectable()
export class SearchResultService {
    constructor(private http: HttpClient) { }

    getSearch(keyword: string): Observable<HttpResponse> {
        return this.http.get<HttpResponse>(`/api/search?keyword=${keyword}`);
    }
}
