import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';

import { MoviesService } from './services/movies.service';
import { APP_ROUTING } from './app.routes';
import { ShorttextPipe } from './pipes/shorttext.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    ShorttextPipe,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
  ],
  providers: [
    MoviesService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
