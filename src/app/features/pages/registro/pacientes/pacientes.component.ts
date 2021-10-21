import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  uploadFile(){
    const file = document.getElementById('file') as HTMLElement
    file.click();
  }

}
