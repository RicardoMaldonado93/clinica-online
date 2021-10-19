import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () =>
      import('@pages/backoffice/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: 'turnos',
    loadChildren: () =>
      import('@pages/turnos/turnos.module').then((m) => m.TurnosModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BackofficeModule {}
