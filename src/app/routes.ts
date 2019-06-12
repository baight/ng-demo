import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: 'src/app/pages/home/home.module#HomeModule'},
];
