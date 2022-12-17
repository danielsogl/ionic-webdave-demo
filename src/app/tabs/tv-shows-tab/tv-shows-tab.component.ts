import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonicModule,
  RefresherCustomEvent,
  ViewWillEnter,
} from '@ionic/angular';
import { MoviesService } from 'src/app/services/movies.service';
import { TrendingLoadingItemComponent } from 'src/app/components/trending-loading-item/trending-loading-item.component';
import { TrendingItemComponent } from 'src/app/components/trending-item/trending-item.component';

@Component({
  selector: 'app-tv-shows-tab',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    TrendingItemComponent,
    TrendingLoadingItemComponent,
  ],
  templateUrl: './tv-shows-tab.component.html',
  styleUrls: ['./tv-shows-tab.component.scss'],
})
export class TvShowsTabComponent implements ViewWillEnter {
  // injectables
  private readonly moviesService = inject(MoviesService);

  // public streams
  public readonly trendingTVShows$ = this.moviesService.trendingTVShows$;
  public readonly trendingTVShowsLoading$ =
    this.moviesService.trendingTVShowsLoading$;

  ionViewWillEnter() {
    this.moviesService.loadTrendingTVShows();
  }

  refreshMovies(event: Event) {
    this.moviesService.loadTrendingTVShows(true);
    (event as RefresherCustomEvent).target.complete();
  }
}
