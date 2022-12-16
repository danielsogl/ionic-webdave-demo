import { Route } from '@angular/router';
import { TabsPage } from './tabs.page';

export const TAB_ROUTES: Route[] = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies',
        loadChildren: () =>
          import('./movies-tab/movies-tab.routes').then((m) => m.ROUTES),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about-tab/about-tab.routes').then((m) => m.ROUTES),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('./favorites-tab/favorites-tab.routes').then((m) => m.ROUTES),
      },
      {
        path: 'tv-shows',
        loadChildren: () =>
          import('./tv-shows-tab/tv-shows-tab.routes').then((m) => m.ROUTES),
      },
      {
        path: '',
        redirectTo: '/tabs/movies',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/movies',
    pathMatch: 'full',
  },
];
