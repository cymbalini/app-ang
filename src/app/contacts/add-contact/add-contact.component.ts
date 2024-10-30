import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    const stringPattern: string | RegExp = '^[A-ż]{2,30}$';

    this.formModel = this.fb.group({
    surname: ['', [Validators.required,Validators.pattern(stringPattern)]],
    name: ['',Validators.required,Validators.pattern(stringPattern)],
    city: ['',Validators.required,Validators.pattern(stringPattern)],
    phoneNumber: [''],
    email: ['']

    });
  }
  saveData() {
    console.log(this.formModel.value);
    this.formModel.reset(); // Reset form after save
  }
}
