import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonicModule,
  IonRouterOutlet,
  ModalController,
  RefresherCustomEvent,
  ViewWillEnter,
} from '@ionic/angular';
import { MoviesService } from 'src/app/services/movies.service';
import { TrendingLoadingItemComponent } from 'src/app/components/trending-loading-item/trending-loading-item.component';
import { MovieDetailsModalComponent } from 'src/app/components/movie-details-modal/movie-details-modal.component';
import { TrendingItem } from 'src/app/models/trending.model';
import { TrendingMovieItemComponent } from 'src/app/components/trending-movie-item/trending-movie-item.component';

@Component({
  selector: 'app-movies-tab',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    TrendingMovieItemComponent,
    TrendingLoadingItemComponent,
  ],
  templateUrl: './movies-tab.component.html',
  styleUrls: ['./movies-tab.component.scss'],
})
export class MoviesTabComponent implements ViewWillEnter {
  // injectables
  private readonly moviesService = inject(MoviesService);
  private readonly modalCtrl = inject(ModalController);
  private readonly routerOutlet = inject(IonRouterOutlet);

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

  async openDetails({ id, title }: TrendingItem) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailsModalComponent,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        id,
        title,
      },
    });
    await modal.present();
  }
}
