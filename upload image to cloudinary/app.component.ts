import { HttpClient } from '@angular/common/http';
import { Component, Input,NgZone ,OnInit} from '@angular/core';

import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploader,FileUploaderOptions,ParsedResponseHeaders  } from 'ng2-file-upload';
import { UserService } from './user.service';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title="app";
  @Input()
  responses:Array<any>;

  private hasBaseDropZoneOver: boolean = false;
  public uploader:any;
  private title1: string;
  
   constructor(private http:HttpClient,
           private userservice:UserService,
         private cloudinary: Cloudinary,
         private zone:NgZone,
         ){
    this.responses = [];
    this.title1='';
  }
  selectedFile:any;
  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
  }
  ngOnInit(): void {
   
    const uploaderOptions: FileUploaderOptions = {
      url: 'https://api.cloudinary.com/v1_1/dsgl6rivw/image/upload',

      autoUpload: true,
      
      isHTML5: true,
     
      removeAfterUpload: true,
     
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
        this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
     
      form.append('upload_preset', "urpuuu0b");
      form.append('file', fileItem);
      fileItem.withCredentials = false;
      return { fileItem, form };
    };
  }
    fileOverBase(e: any): void {
      this.hasBaseDropZoneOver = e;
    }
    upload(){

    }
    imgUrl:string=  'https://res.cloudinary.com/dsgl6rivw/image/upload/v1623736394/sample.jpg';

    imageToShow:any;
    isImageLoading:any;
     
    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.imageToShow = reader.result;
      }, false);
   
      if (image) {
         reader.readAsDataURL(image);
      }
     }
   
     getImageFromService() {
         this.isImageLoading = true;
         this.userservice.getImage(this.imgUrl).subscribe(data => {
           this.createImageFromBlob(data);
           this.isImageLoading = false;
         }, error => {
           this.isImageLoading = false;
           console.log(error);
         });
     }
   } 
