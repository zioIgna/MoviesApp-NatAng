import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ApiService]
})
export class DetailComponent implements OnInit {

  movie: any;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log('id: ', id);
    this.getMovie(id);

  }

  getMovie(id: number){
    this.api.getDetailsMovie(id).subscribe(
      data =>{
        this.movie = data;
        console.log('movie fetched: ', this.movie);
      },
      error => console.log("Error from the server: ", error)
    )
  }

}
