import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder,Validators } from '@angular/forms';
=======
import { FormBuilder, Validators } from '@angular/forms';
>>>>>>> 81d94246c15a617603ac1adcb767a48d95647e40

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
<<<<<<< HEAD

    const pattern: string | RegExp = '^[A-ż]{2,10}$'
=======
    const stringPattern: string | RegExp = '^[A-ż]{2,30}$';
>>>>>>> 81d94246c15a617603ac1adcb767a48d95647e40

    this.formModel = this.fb.group({
    surname: ['', [Validators.required,Validators.pattern(stringPattern)]],
    name: ['',Validators.required,Validators.pattern(stringPattern)],
    city: ['',Validators.required,Validators.pattern(stringPattern)],
    phoneNumber: [''],
    email: ['']

      surname: ['', Validators.required, Validators.pattern(pattern)],
      name: ['', Validators.required, Validators.pattern(pattern)],
      city: [''],
      phoneNumber: [''],
      email: ['']

    });
  }
<<<<<<< HEAD

  saveData(){
      console.log(this.formModel.value);
=======
  saveData() {
    console.log(this.formModel.value);
    this.formModel.reset(); // Reset form after save
>>>>>>> 81d94246c15a617603ac1adcb767a48d95647e40
  }
}
