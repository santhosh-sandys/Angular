import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private userservice:UserService, private router:Router,private location:Location) { }
  
 data1 :any=this.userservice.data;
 details :any ;

  ngOnInit() : void {
    this.getData();
  }
  
  goBack() {
    this.router.navigateByUrl('login');
  }

  editInfo() {
    this.details = this.data1;
  }
  updInfo() {
    this.location.back();
    alert("Successfully Updated...");
    console.log(this.userservice.users);
  }
receive  : any = [] ;
  getData() {
    this.userservice.getServerData().subscribe( response => {
      this.receive = response;
      console.log(this.receive);
    });


  }
}
