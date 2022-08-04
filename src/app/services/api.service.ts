import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.BASE_URL}/movies`);
  }

  getOne(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.BASE_URL}/movies/${id}`);
  }

  add(title: string, description: string, year: number) {
    const newMovie = {
      title,
      description,
      year
    };

    return this.httpClient.post(`${this.BASE_URL}/movies`, newMovie);
  }

  edit(id: number, title?: string, description?: string, year?: number) {
    const editedMovie = {
      title,
      description,
      year
    };

    return this.httpClient.put(`${this.BASE_URL}/movies/${id}`, editedMovie);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.BASE_URL}/movies/${id}`);
  }
}
