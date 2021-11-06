import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cl-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registerFormType!: string;


  constructor(private router:ActivatedRoute) { 
    this.router.data.subscribe(data=>{
      console.log(data)
      this.registerFormType = data.template;

      console.log(this.registerFormType)
    })
   }

  ngOnInit(): void {
  }

}
