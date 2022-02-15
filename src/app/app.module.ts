import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonDetailsComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
