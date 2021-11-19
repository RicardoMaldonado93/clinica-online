import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cl-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['../registro.component.scss']
})
export class EspecialistasComponent implements OnInit {

  form!:FormGroup
  specialities!:string[]

  constructor(private fb: FormBuilder) {
    this.specialities = [
      "Traumatologo"
    ]

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['',[Validators.required]],
      age: ['', [Validators.required]],
      speciality: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      photo: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }


  uploadFile(){
    const file = document.getElementById('file') as HTMLElement
    file.click();
    file.addEventListener('change', (event)=>{
      console.log(event)
    })
  }

  signIn(){
    console.log(this.form)
  }

  hasError(fieldName:string):boolean {
    const field = this.form.get(fieldName);
    return  (field?.touched && field.invalid) || false;
  }
}
