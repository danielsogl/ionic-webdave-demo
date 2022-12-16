import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.TAB_ROUTES),
  },
];
