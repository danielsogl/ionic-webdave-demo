import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { TrendingItem, TrendingResponse } from '../models/trending.model';
import { TMDBService } from './tmdb-api.service';

@Injectable({ providedIn: 'root' })
export class TVShowsService {
  // injectables
  private readonly tmdbApiService = inject(TMDBService);

  // trending tv shows
  private readonly trendingTVSHows = new BehaviorSubject<TrendingItem[]>([]);
  public readonly trendingTVShows$ = this.trendingTVSHows.asObservable();
  private readonly trendingTVShowsLoading = new BehaviorSubject<boolean>(false);
  public readonly trendingTVShowsLoading$ =
    this.trendingTVShowsLoading.asObservable();

  loadTrendingTVShows(force = false) {
    if (this.trendingTVSHows.value.length && !force) return;

    this.trendingTVShowsLoading.next(true);
    this.tmdbApiService.getTrendingTVShows().subscribe((response) => {
      this.trendingTVSHows.next(response.results);
      this.trendingTVShowsLoading.next(false);
    });
  }
}
