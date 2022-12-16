import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-movies-tab',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './movies-tab.component.html',
  styleUrls: ['./movies-tab.component.scss'],
})
export class MoviesTabComponent {}
