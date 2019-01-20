import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService, GlobalsService]
})
export class HomeComponent implements OnInit {
  title = 'movies';
  movies;
  mediaUrl: string;
 
  constructor(private api: ApiService, private globals: GlobalsService) {
    this.mediaUrl = globals.getBaseUrl() + '/media/';
  }

  ngOnInit() {
    this.getMovies();
    console.log('These are the movies: ' , this.movies);
    
  }

  getMovies(){
    this.api.getAllMovies().subscribe(
      data =>{
        this.movies = data;
      },
      error => console.log("Error from the server: ", error)
    )
  }

}
