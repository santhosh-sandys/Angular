import { Component, OnInit } from '@angular/core';
import {data} from './temdata';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  
 model = new data('','');

submitted = false;
usernamefound:any;
userpassfound:any;

onSubmit( value:any) {
  
   this.submitted = true; 
   var usernamefound=false;
   var userpassfound=false;

   for(var i=0 ; i< this.userservice.users.length ; i++){
   if(this.model.name == this.userservice.users[i].firstName){
       usernamefound=true;

       if(this.model.password == this.userservice.users[i].password){
        userpassfound=true;
         this.userservice.data=this.userservice.users[i];
        
       }
      
      }
    }

      if(usernamefound && userpassfound){alert("Login Successfully");}
      else if(usernamefound && !userpassfound){alert("Password Incorrect");}
     else {
        alert("Username Not Found");
      }
   }
   constructor( private userservice: UserService) {
}
 ngOnInit(): void {
 }
}
