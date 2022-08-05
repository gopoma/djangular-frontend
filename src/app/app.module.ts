import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { AddMoviePageComponent } from './pages/add-movie-page/add-movie-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { EditMoviePageComponent } from './pages/edit-movie-page/edit-movie-page.component';
import { DeleteMoviePageComponent } from './pages/delete-movie-page/delete-movie-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Route[] = [
  {
    path: "movies",
    children: [
      {
        path: "",
        component: MoviesPageComponent
      },
      {
        path: "add",
        component: AddMoviePageComponent
      },
      {
        path: ":id",
        component: MoviePageComponent
      },
      {
        path: ":id/edit",
        component: EditMoviePageComponent
      },
      {
        path: ":id/delete",
        component: DeleteMoviePageComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    AddMoviePageComponent,
    MoviePageComponent,
    EditMoviePageComponent,
    DeleteMoviePageComponent,
    NavbarComponent,
    MovieComponent
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
