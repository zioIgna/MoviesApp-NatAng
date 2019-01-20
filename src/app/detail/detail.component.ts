import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { GlobalsService } from '../globals.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ApiService, GlobalsService]
})
export class DetailComponent implements OnInit {

  movie: any;
  mediaUrl: string;

  constructor(private route: ActivatedRoute, private api: ApiService, private globals: GlobalsService, private location: Location) {
    this.mediaUrl = globals.getBaseUrl() + '/media/';
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log('id: ', id);
    this.getMovie(id);
  }

  getMovie(id: number) {
    this.api.getDetailsMovie(id).subscribe(
      data => {
        this.movie = data;
        console.log('movie fetched: ', this.movie);
      },
      error => console.log("Error from the server: ", error)
    )
  }

  backClicked() {
    this.location.back();
  }

}
