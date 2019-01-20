import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { isAndroid } from 'tns-core-modules/platform';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  movies = [
    {id: 1, title: "Titanic", img: "titanic.jpg", desc: "No desc", avg_rating: 5},
    {id: 3, title: "Jurassic Park", img: "jurassic.jpg", desc: "No desc", avg_rating: 0},
    {id: 4, title: "Avatar", img: "avatar.jpg", desc: "No desc", avg_rating: 0}
  ];

  baseUrl = 'http://localhost:3000';
  // httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) {
    if (isAndroid) {
      // this.baseUrl = 'http://10.0.2.2:3000';
      this.baseUrl = 'http://movserv2-env.dppfpp23ez.eu-west-1.elasticbeanstalk.com';
      // this.baseUrl = 'http://jsonplaceholder.typicode.com/posts';
    }
  }

  getAllMovies() { // : Observable<any>
    return this.http.get(this.baseUrl + '/movies');  // , {headers: this.httpHeaders}
    // return this.http.get(this.baseUrl);  // , {headers: this.httpHeaders}
    // return this.movies;
  }

  getDetailsMovie(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/movies/' + id);
  }

}
