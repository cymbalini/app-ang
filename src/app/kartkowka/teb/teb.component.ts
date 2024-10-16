import { Component } from '@angular/core';
import { contactsData } from '../../data/contacts-data';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-teb',
  templateUrl: './teb.component.html',
  styleUrl: './teb.component.scss'
})
export class TebComponent {
  data: ContactModel[] = contactsData;
}
