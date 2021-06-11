import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { UserService } from './user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveForm2Component,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


