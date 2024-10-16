import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ContactsListComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatIconModule

  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
