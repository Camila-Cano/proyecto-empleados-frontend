import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.ROUTES) },
  { path: 'registro-empleado', loadChildren: () => import('./pages/registro-empleado/registro-empleado.routes').then(m => m.ROUTES) },
  { path: 'consultar-empleado', loadChildren: () => import('./pages/operaciones-empleado/operaciones-empleado.routes').then(m => m.ROUTES) },
  { path: 'eliminar-empleado', loadChildren: () => import('./pages/operaciones-empleado/operaciones-empleado.routes').then(m => m.ROUTES) },
  { path: 'editar-empleado', loadChildren: () => import('./pages/operaciones-empleado/operaciones-empleado.routes').then(m => m.ROUTES) }
];
