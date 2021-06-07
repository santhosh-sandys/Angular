import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  reg(){
    this.router.navigateByUrl('reg');
  }
  login(){
    this.router.navigateByUrl('login');
  }

}
