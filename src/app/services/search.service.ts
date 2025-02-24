import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl:string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  searchAnime(imageUrl: any): Observable<any> {
    return this.http.post(this.apiUrl, imageUrl);

  }
}
