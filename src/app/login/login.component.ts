import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink , Router } from '@angular/router';
import { Admin } from '../models/admin';
import { LoginServiceService } from '../service/login/login-service.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  adminLogin: FormGroup;
  loginObj: Admin = {Email: '', PasswordHash: ''};
  hidePassword: boolean = true;

  constructor(private router:Router, private loginService:LoginServiceService){
    this.loginObj = this.loginObj;
    this.adminLogin = new FormGroup({
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required]),
    });
  }

  onSubmit() {
    if(this.adminLogin.valid){
      this.loginObj.Email = this.adminLogin.controls['email'].value;
      this.loginObj.PasswordHash = this.adminLogin.controls['password'].value;
      
      this.loginService.login(this.loginObj).subscribe(
        (response)=>{
          console.log("Response: ", response);
          const token = response;
          sessionStorage.setItem('token', token);
          const adminToken = sessionStorage.getItem('token');
          if(adminToken){
            this.gotoDashboard();
          }
          else {
            this.gotoLogin();
          }
          
        },
        (error)=>{
          if(error.status === 401){
            console.log("Unauthorized");
          }
          else {
            console.log("An error occurred");
          }
        }
      )
    }else {
      alert('Please fill all the fields');
    }
  }

  togglePassword(){
      this.hidePassword = !this.hidePassword;
  }

  gotoDashboard(){
    this.router.navigate(['/dashboard'])
  };

  gotoLogin(){
    this.router.navigate(['/login'])
  };

}