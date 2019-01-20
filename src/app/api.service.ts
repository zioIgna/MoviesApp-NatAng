import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000';
  // baseUrl = 'http://jsonplaceholder.typicode.com/posts';
  // httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseUrl + '/movies'); // , {headers: this.httpHeaders}
    // return this.http.get(this.baseUrl); // , {headers: this.httpHeaders}
  }

  getDetailsMovie(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/movies/' + id);
  }

}
