import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink , Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  hidePassword: boolean = true;

  

  togglePassword(){
      this.hidePassword = !this.hidePassword;
  }

  loginObj:Login;

  constructor(private http:HttpClient, private router:Router){
    this.loginObj= new Login;
  };
  
onLogin(){
  debugger;
  this.http.post('https://freeapi.gerasim.in/api/User/Login', this.loginObj).subscribe((res:any)=>{
    if(res.result){
      console.log(res.result);
      alert("Login Sucess")
      this.router.navigateByUrl("/dashboard");
    }else{
      alert(res.message)
    }
  })
}

}

export class Login {
    
  email: string;
 passwordHash: string;
 constructor(){
  this.email ="";
  this.passwordHash ="";
 }
 
}
