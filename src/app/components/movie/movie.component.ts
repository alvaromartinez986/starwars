import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { PeopleService } from '../../services/people.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:any[];
  id: string = "";
  people:any[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private _moviesService:MoviesService,
    private _peopleService:PeopleService
  ) { 

    this.people = [];
    
    this.activatedRoute.params
      .subscribe(parameters => this.id = parameters['id']);

     if(this.id!=""){
      this._moviesService.getMovie(this.id)
        .subscribe(data => {
          this.movie = data
          this.setPeople();
        },
          error => console.log(error)
        );        
    }

 }

 setPeople(){
    
  let characters = this.movie['characters'];
  
  characters.forEach(character => {
    let character_id = character.split("/")[5];
    this._peopleService.getInformationPeople(character_id)
    .subscribe(data=>{
      this.people.push(data);
    });
  });
   
 }

  ngOnInit() {
  }

}
