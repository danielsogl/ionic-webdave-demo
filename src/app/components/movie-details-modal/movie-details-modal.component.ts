import { Component, inject, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details-modal',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss'],
})
export class MovieDetailsModalComponent implements OnDestroy {
  @Input() set id(movieId: number) {
    if (movieId) {
      this.moviesService.loadMovieById(movieId);
    }
  }
  @Input() title!: string;

  // injectables
  private readonly modalCtrl = inject(ModalController);
  private readonly moviesService = inject(MoviesService);

  // public streams
  public readonly movieDetails$ = this.moviesService.movieDetails$;
  public readonly movieDetailsLoading$ =
    this.moviesService.movieDetailsLoading$;

  ngOnDestroy() {
    this.moviesService.clearMovieDetails();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
