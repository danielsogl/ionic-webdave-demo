import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TrendingItem } from 'src/app/models/trending.model';

@Component({
  selector: 'app-trending-item',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingItemComponent {
  @Input() item!: TrendingItem;
}
