import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingItem } from 'src/app/models/trending.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-trending-movie-item',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './trending-movie-item.component.html',
  styleUrls: ['./trending-movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingMovieItemComponent {
  @Input() item!: TrendingItem;
}
