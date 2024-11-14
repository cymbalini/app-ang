import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';

const routes: Routes = [
  {path: '', component:ContactsListComponent},
  {path: 'add-contact', component:AddContactComponent},
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
