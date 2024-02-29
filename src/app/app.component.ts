import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainDashboardComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fraud-detection-frontend';
}
