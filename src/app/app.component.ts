import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private readonly platform: Platform) {
    this.initApp();
  }

  private initApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }
}
