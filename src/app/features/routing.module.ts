import {
  BACKOFFICE,
  LOGIN,
  PERFIL,
  REGISTRO,
  TURNOS,
} from '@features/constants/pages';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { HOME } from './constants/pages';

const routes: Routes = [
  {
    path: HOME,
    loadChildren: () =>
      import('@pages/home/home.module').then((m) => m.HomeModule),
    data: { animation: HOME },
  },
  {
    path: REGISTRO,
    loadChildren: () =>
      import('@pages/registro/registro.module').then((m) => m.RegistroModule),
    data: { animation: REGISTRO },
  },
  {
    path: LOGIN,
    loadChildren: () =>
      import('@pages/login/login.module').then((m) => m.LoginModule),
    data: { animation: LOGIN },
  },
  {
    path: TURNOS,
    loadChildren: () =>
      import('@pages/turnos/turnos.module').then((m) => m.TurnosModule),
    data: { animation: TURNOS },
  },
  {
    path: PERFIL,
    loadChildren: () =>
      import('@pages/perfil/perfil.module').then((m) => m.PerfilModule),
    data: { animation: PERFIL },
  },
  {
    path: BACKOFFICE,
    loadChildren: () =>
      import('@pages/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule
      ),
    data: { animation: BACKOFFICE },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
