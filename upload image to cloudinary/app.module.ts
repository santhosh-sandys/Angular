import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { UserService } from './user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm2Component } from './routingcompo/reactive-form2/reactive-form2.component';
import { TemplateDrivenComponent } from './routingcompo/template-driven/template-driven.component';
import { RoutingcompoComponent } from './routingcompo/routingcompo.component';
import { TableComponent } from './routingcompo/table/table.component';
import { PostComponent } from './post/post.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveForm2Component,
    TemplateDrivenComponent,
    RoutingcompoComponent,
    TableComponent,
    PostComponent
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: 'dsgl6rivw',upload_preset:'urpuuu0b'}),
    AngularFileUploaderModule,
    FileUploadModule
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


