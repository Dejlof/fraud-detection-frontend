import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink , Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  hidePassword: boolean = true;

  constructor(private router:Router){

  }

  togglePassword(){
      this.hidePassword = !this.hidePassword;
  }

  gotoDashboard(){
    this.router.navigate(['/dashboard'])
  };
}
