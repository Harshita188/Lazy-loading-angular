import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.routes').then(m => m.ABOUT_ROUTES)
  }
];