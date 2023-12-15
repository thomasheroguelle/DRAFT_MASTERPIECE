import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private route: Router) {}

  redirectToMainPage() {
    this.route.navigate(['main']);
  }
  login() {
    this.route.navigate(['login']);
  }
  register() {
    this.route.navigate(['register']);
  }
}
