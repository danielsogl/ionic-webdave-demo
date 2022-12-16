/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.danielsogl.webdavedemo',
  appName: 'WebDaveDemo',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      splashFullScreen: true,
      launchAutoHide: false,
    },
  },
};

export default config;
