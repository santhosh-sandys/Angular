import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {
  userformm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
             private userservice: UserService
             
    ) {
    this.userformm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
   }
 
  ngOnInit() {
   
      
  }

  
  get f() { return this.userformm.controls; }

  onSubmit(reg:any) {
    
      this.submitted = true;
      console.log(reg.value);
      this.userservice.users.push(reg.value); 
      if (this.userformm.invalid) {
        return;
    
    }
    
      
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userformm.value))
      
  }
}
