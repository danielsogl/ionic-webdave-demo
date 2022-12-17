import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TrendingItem } from 'src/app/models/trending.model';

@Component({
  selector: 'app-trending-tvshow-item',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './trending-tvshow-item.component.html',
  styleUrls: ['./trending-tvshow-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingTVShowItemComponent {
  @Input() item!: TrendingItem;
}
