import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);