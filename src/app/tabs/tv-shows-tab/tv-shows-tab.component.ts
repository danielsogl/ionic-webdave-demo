import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tv-shows-tab',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './tv-shows-tab.component.html',
  styleUrls: ['./tv-shows-tab.component.scss'],
})
export class TvShowsTabComponent {}
