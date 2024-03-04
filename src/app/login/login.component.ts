import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink , Router } from '@angular/router';
import { Admin } from '../models/admin';
import { LoginServiceService } from '../service/login/login-service.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginObj: Admin = {Username: '', Password: ''};
  hidePassword: boolean = true;

  constructor(private loginService:LoginServiceService){
    this.loginObj = this.loginObj;
  }

  onLogin(){
    this.loginService.login(this.loginObj).subscribe(
      (response:any)=>{
        if (this.isLoginSuccessful(response)) {
          alert("Login Success");
        } else {
          alert("Login Failed");
        }
      },
      (error:any)=>{
        console.log('Error occurred:', error);
        alert("An error occurred during login");
      }
    )
  }

  private isLoginSuccessful(response: any): boolean {
    return response && response.Username === 'super_admin' && response.Password === 'admin@123';
  }

  togglePassword(){
      this.hidePassword = !this.hidePassword;
  }

  // gotoDashboard(){
  //   this.router.navigate(['/dashboard'])
  // };
}