import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  constructor(private route: Router){}
 
  redirectToMainPage() {
    this.route.navigate(['main'])
  }
}
