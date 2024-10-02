import { Component } from '@angular/core';
import { contactsData } from '../../data/contacts-data';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {
  data: ContactModel[] = contactsData;

}
