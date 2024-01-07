import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  // Login() {
  //   console.log(this.email);
  //   console.log(this.password);

  //   let bodyData = {
  //     email: this.email,
  //     password: this.password,
  //   };

  //   this.http
  //     .post('http://localhost:8091/api/v1/user/login', bodyData)
  //     .subscribe((resultData: any) => {
  //       console.log(resultData);

  //       if (resultData.message == 'Email not exits') {
  //         alert('Email not exits');
  //       } else if (resultData.message == 'Login Success') {
  //         this.router.navigateByUrl('/logements');
  //       } else {
  //         alert('Incorrect Email and Password not match');
  //       }
  //     });
  // }
}
