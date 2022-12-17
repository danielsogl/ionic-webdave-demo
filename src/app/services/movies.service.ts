import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
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

  // trending tv shows
  private readonly trendingTVSHows = new BehaviorSubject<TrendingItem[]>([]);
  public readonly trendingTVShows$ = this.trendingTVSHows.asObservable();
  private readonly trendingTVShowsLoading = new BehaviorSubject<boolean>(false);
  public readonly trendingTVShowsLoading$ =
    this.trendingTVShowsLoading.asObservable();

  loadTrendingMovies(force = false) {
    if (this.trendingMovies.value.length && !force) return;

    this.trendingMoviesLoading.next(true);
    this.tmdbApiService.getTrendingMovies().subscribe((response) => {
      this.trendingMovies.next(response.results);
      this.trendingMoviesLoading.next(false);
    });
  }

  loadTrendingTVShows(force = false) {
    if (this.trendingMovies.value.length && !force) return;

    this.trendingTVShowsLoading.next(true);
    this.tmdbApiService.getTrendingTVShows().subscribe((response) => {
      this.trendingTVSHows.next(response.results);
      this.trendingTVShowsLoading.next(false);
    });
  }
}
