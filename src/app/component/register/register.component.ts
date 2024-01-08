import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  hide = true;

  constructor(private http: HttpClient) {}
  save() {
    let bodyData = {
      userName: this.userName,
      email: this.email,
      password: this.password,
    };
    this.http
      .post('http://localhost:8091/api/v1/user/save', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('User Registered Successfully');
      });
  }
}
