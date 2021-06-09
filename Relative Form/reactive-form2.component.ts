import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {
  userformm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.userformm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
   }

  ngOnInit() {
      
  }

  // convenience getter for easy access to form fields
  get f() { return this.userformm.controls; }

  onSubmit() {
      this.submitted = true;
      
      // stop here if form is invalid
      if (this.userformm.invalid) {
          return;
          
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userformm.value))
      console.log(this.userformm);
  }
}
