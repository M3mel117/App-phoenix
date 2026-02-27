import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'cursos',
        loadComponent: () =>
          import('./pages/cursos/cursos.page').then(m => m.CursosPage),
      },
      {
        path: 'comunidad',
        loadComponent: () =>
          import('./pages/comunidad/comunidad.page').then(m => m.ComunidadPage),
      },
      {
        path: 'cuenta',
        loadComponent: () =>
          import('./pages/cuenta/cuenta.page').then(m => m.CuentaPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
