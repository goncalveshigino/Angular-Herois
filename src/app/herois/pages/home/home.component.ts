import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `.container{
      margin: 10px
    }`
  ]
})
export class HomeComponent {

  constructor(private router: Router) { }
  



  

  logout() {
    this.router.navigate(['./auth']);
  }
}
