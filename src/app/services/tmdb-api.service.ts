import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrendingResponse } from '../models/trending.model';
import { delay, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TMDBService {
  private readonly http = inject(HttpClient);
  private readonly apiKey = '4ca497427c65801588c2f4298827deb3';
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  getTrendingMovies(): Observable<TrendingResponse> {
    return this.http
      .get<TrendingResponse>(`${this.baseUrl}/trending/movie/week`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(delay(1500));
  }

  getTrendingTVShows(): Observable<TrendingResponse> {
    return this.http
      .get<TrendingResponse>(`${this.baseUrl}/trending/tv/week`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(delay(1500));
  }
}
