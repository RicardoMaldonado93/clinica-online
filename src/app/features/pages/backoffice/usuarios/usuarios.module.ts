import { UsuariosComponent } from './usuarios.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsuariosModule {}
