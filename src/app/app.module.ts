import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { MovieComponent } from './pages/movie/movie.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './pages/delete-movie/delete-movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
  {
    path: "movies",
    children: [
      {
        path: "",
        component: MoviesComponent
      },
      {
        path: "add",
        component: AddMovieComponent
      },
      {
        path: ":id",
        component: MovieComponent
      },
      {
        path: ":id/edit",
        component: EditMovieComponent
      },
      {
        path: ":id/delete",
        component: DeleteMovieComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddMovieComponent,
    MovieComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
