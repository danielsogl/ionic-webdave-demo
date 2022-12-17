import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonicModule,
  RefresherCustomEvent,
  ViewWillEnter,
} from '@ionic/angular';
import { MoviesService } from 'src/app/services/movies.service';
import { TrendingItemComponent } from 'src/app/components/trending-item/trending-item.component';
import { TrendingLoadingItemComponent } from 'src/app/components/trending-loading-item/trending-loading-item.component';

@Component({
  selector: 'app-movies-tab',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    TrendingItemComponent,
    TrendingLoadingItemComponent,
  ],
  templateUrl: './movies-tab.component.html',
  styleUrls: ['./movies-tab.component.scss'],
})
export class MoviesTabComponent implements ViewWillEnter {
  // injectables
  private readonly moviesService = inject(MoviesService);

  // public streams
  public readonly trendingMovies$ = this.moviesService.trendingMovies$;
  public readonly trendingMoviesLoading$ =
    this.moviesService.trendingMoviesLoading$;

  ionViewWillEnter() {
    this.moviesService.loadTrendingMovies();
  }

  refreshMovies(event: Event) {
    this.moviesService.loadTrendingMovies(true);
    (event as RefresherCustomEvent).target.complete();
  }
}
