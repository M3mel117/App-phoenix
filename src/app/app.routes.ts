import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
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
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'curso-detalle/:id',
    loadComponent: () =>
      import('./pages/curso-detalle/curso-detalle.page').then(m => m.CursoDetallePage),
  },
];
