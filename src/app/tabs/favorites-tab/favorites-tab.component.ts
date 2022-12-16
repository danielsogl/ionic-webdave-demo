import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-favorites-tab',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './favorites-tab.component.html',
  styleUrls: ['./favorites-tab.component.scss'],
})
export class FavoritesTabComponent {}
