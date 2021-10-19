import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistroModule { }
