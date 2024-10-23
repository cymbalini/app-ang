import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
    this.formModel = this.fb.group({

    });
  }
}
