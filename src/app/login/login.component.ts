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
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  adminLogin: FormGroup;
  loginObj: Admin = {Username: '', Password: ''};
  hidePassword: boolean = true;

  constructor(private router:Router, private loginService:LoginServiceService){
    this.loginObj = this.loginObj;
    this.adminLogin = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
    });
  }

  onSubmit(){
    if(this.adminLogin.valid){
      this.loginObj.Username = this.adminLogin.controls['username'].value;
      this.loginObj.Password = this.adminLogin.controls['password'].value;
      this.loginService.login(this.loginObj).subscribe(
        (response: any)=>{
          if (this.isLoginSuccessful(response)) {
            this.gotoDashboard();
          } 
          else {
            console.log('Invalid username or password');
            alert('Invalid username or password');
          }
        },
        (error:any)=>{
          console.log('Error occurred:', error);
          alert("An error occurred during login");
        }
      )
    } 
    else {
      console.log('Please fill all the fields');
      alert('Please fill all the fields');
    }
  }

  private isLoginSuccessful(response: any): boolean {
    return this.loginObj.Username === 'super_admin' && this.loginObj.Password === 'admin@123';
  }

  togglePassword(){
      this.hidePassword = !this.hidePassword;
  }

  gotoDashboard(){
    this.router.navigate(['/dashboard'])
  };
  
}