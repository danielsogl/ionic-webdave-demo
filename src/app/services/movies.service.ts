import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import { TrendingItem, TrendingResponse } from '../models/trending.model';
import { TMDBService } from './tmdb-api.service';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  // injectables
  private readonly tmdbApiService = inject(TMDBService);

  // trending movies
  private readonly trendingMovies = new BehaviorSubject<TrendingItem[]>([]);
  public readonly trendingMovies$ = this.trendingMovies.asObservable();
  private readonly trendingMoviesLoading = new BehaviorSubject<boolean>(false);
  public readonly trendingMoviesLoading$ =
    this.trendingMoviesLoading.asObservable();

  // movie details
  private readonly movieDetails = new BehaviorSubject<Movie | null>(null);
  public readonly movieDetails$ = this.movieDetails.asObservable();
  private readonly movieDetailsLoading = new BehaviorSubject<boolean>(false);
  public readonly movieDetailsLoading$ =
    this.movieDetailsLoading.asObservable();

  loadTrendingMovies(force = false) {
    if (this.trendingMovies.value.length && !force) return;

    this.trendingMoviesLoading.next(true);
    this.tmdbApiService.getTrendingMovies().subscribe((response) => {
      this.trendingMovies.next(response.results);
      this.trendingMoviesLoading.next(false);
    });
  }

  loadMovieById(movieId: number) {
    this.movieDetailsLoading.next(true);
    this.tmdbApiService.getMovieById(movieId).subscribe((movie) => {
      this.movieDetails.next(movie);
      this.movieDetailsLoading.next(false);
    });
  }

  clearMovieDetails() {
    this.movieDetails.next(null);
  }
}
