import { Component, OnInit } from '@angular/core';
import {data} from './temdata';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  
  nationality = ['Indian', 'Non-indian'];

model = new data('','','','');

submitted = false;
onSubmit( value:any) {
  
   this.submitted = true; 
   console.log(value);

  }
 
    constructor() {
}
 
  ngOnInit(): void {

  }
 
  validate(){

  }
  
}
