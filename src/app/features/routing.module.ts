import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('@pages/registro/registro.module').then((m) => m.RegistroModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'turnos',
    loadChildren: () =>
      import('@pages/turnos/turnos.module').then((m) => m.TurnosModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () =>
      import('@pages/perfil/perfil.module').then((m) => m.PerfilModule)
  },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('@pages/backoffice/backoffice.module').then((m) => m.BackofficeModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
