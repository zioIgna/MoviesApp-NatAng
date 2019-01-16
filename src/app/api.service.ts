import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get(this.baseUrl + '/movies');
  }

  getDetailsMovie(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/movies/' + id );
  }

}
