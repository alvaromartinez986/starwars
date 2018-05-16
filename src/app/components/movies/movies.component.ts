import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any[];

  constructor(
    private _movieService:MoviesService,
    private router:Router
  ) {

    this._movieService.getMovies()
      .subscribe(
        data=>{
          this.movies = data.results;
        }
      );

  }

  ngOnInit() {
  }

  seeMovie(idx:number){
    idx = this.movies[idx].url.split('/')[5];
    this.router.navigate( ['/movie',idx] );
  }

}
