import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  constructor(private router:Router){

  }

  onLogOut(){
      sessionStorage.removeItem('token');
      this.router.navigate(['/login']);
  }
}
