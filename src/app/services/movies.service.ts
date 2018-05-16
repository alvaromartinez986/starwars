import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class MoviesService {

  moviesUrl: string = "https://swapi.co/api/films";

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(this.moviesUrl)
      .map(res => res.json());
  }

  getMovie(key$:string){
    let url = this.moviesUrl+'/'+ key$;
    return this.http.get(url)
            .map(res => res.json());
  }

}
