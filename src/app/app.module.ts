import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContactsModule } from './contacts/contacts.module';
import { TebComponent } from './kartkowka/teb/teb.component';

@NgModule({
  declarations: [
    AppComponent,
    TebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactsModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
