import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-trending-loading-item',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './trending-loading-item.component.html',
  styleUrls: ['./trending-loading-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingLoadingItemComponent {}
