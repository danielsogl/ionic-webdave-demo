import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonicModule,
  RefresherCustomEvent,
  ViewWillEnter,
} from '@ionic/angular';
import { TrendingLoadingItemComponent } from 'src/app/components/trending-loading-item/trending-loading-item.component';
import { TVShowsService } from 'src/app/services/tv-shows.service';
import { TrendingTVShowItemComponent } from 'src/app/components/trending-tvshow-item/trending-tvshow-item.component';

@Component({
  selector: 'app-tv-shows-tab',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    TrendingTVShowItemComponent,
    TrendingLoadingItemComponent,
  ],
  templateUrl: './tv-shows-tab.component.html',
  styleUrls: ['./tv-shows-tab.component.scss'],
})
export class TvShowsTabComponent implements ViewWillEnter {
  // injectables
  private readonly tvShowsService = inject(TVShowsService);

  // public streams
  public readonly trendingTVShows$ = this.tvShowsService.trendingTVShows$;
  public readonly trendingTVShowsLoading$ =
    this.tvShowsService.trendingTVShowsLoading$;

  ionViewWillEnter() {
    this.tvShowsService.loadTrendingTVShows();
  }

  refreshMovies(event: Event) {
    this.tvShowsService.loadTrendingTVShows(true);
    (event as RefresherCustomEvent).target.complete();
  }
}
