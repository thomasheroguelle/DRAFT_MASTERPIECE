import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, RouterModule],

})
export class LoginComponent {
  email: string = '';
  password: string = '';
  hide = true;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  Login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post('http://localhost:8091/api/v1/user/login', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);

        if (resultData.message == 'Email not exits') {
          alert('Email not exits');
        } else if (resultData.message == 'Login Success') {
          this.router.navigateByUrl('/logements');
        } else {
          alert('Incorrect Email and Password not match');
        }
      });
  }
}
