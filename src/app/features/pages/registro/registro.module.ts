import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'paciente',
    component: RegistroComponent,
    data: { template: 'patientForm' }
  },
  {
    path: 'especialista',
    component: RegistroComponent,
    data: { template: 'specialistForm' }
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [RegistroComponent, PacientesComponent, EspecialistasComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistroModule { }
