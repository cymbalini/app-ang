import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {
  formModel: any;
  constructor(
    
    private fb: FormBuilder

  ){}

  ngOnInit() {
    this.createFormModel();
  }
  createFormModel(){

    const pattern: string | RegExp = '^[A-ż]{2,10}$'

    this.formModel = this.fb.group({

      surname: ['', Validators.required, Validators.pattern(pattern)],
      name: ['', Validators.required, Validators.pattern(pattern)],
      city: [''],
      phoneNumber: [''],
      email: ['']

    });
  }

  saveData(){
      console.log(this.formModel.value);
  }
}
