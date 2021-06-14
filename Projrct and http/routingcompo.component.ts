import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-routingcompo',
  templateUrl: './routingcompo.component.html',
  styleUrls: ['./routingcompo.component.css']
})
export class RoutingcompoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Register(){
    this.router.navigateByUrl('register');
  }
  Login(){
    this.router.navigateByUrl('login');
  }
  Table(){
    this.router.navigateByUrl('table');
  }

}
