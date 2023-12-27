import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) { }
  save() {

    let bodyData = {
      "userName": this.userName,
      "email": this.email,
      "password": this.password
    };
    this.http.post("http://localhost:8090/api/v1/user/save", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("User Registered Successfully");

    });
  }
}
