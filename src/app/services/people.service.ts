import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/Rx";


@Injectable()
export class PeopleService {

  peopleUrl = "https://swapi.co/api/people";
  
  constructor(private http: Http) { }

  getInformationPeople(key$:string) {
    let url = this.peopleUrl+'/'+ key$;
    return this.http.get(url)
            .map(res => res.json());
  }

}
