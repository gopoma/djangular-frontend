import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  movies$: any;
  movies: Movie[] | undefined;

  constructor(private movieService: ApiService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      console.log(this.movies);
    });
  }

  ngOnDestroy(): void {
    this.movies$?.unsubscribe();
  }
}
