import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../sidebar/sidebar.component';

interface Transaction {
  accountNumber: number;
  date: string;
  method: string;
  transactionId: string;
  amount: string;
  status: string;
  action: string;}

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {
MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;

 totData:number=20;
 
  constructor() {
    for (let i = 1; i <= this.totData; i++) {
      const amount = i * 3500; 
      let status = 'Good'; 
      if (amount > 15000 && amount <= 30000) {
        status = 'Monitor';
       
      } else if (amount > 30000) {
        status = 'Critical';
      }

      this.DATAS.push({
        accountNumber: this.MockAccount + i,
        date: 'March ' + (17 - i % 17) + ', 2024',
        method: 'Withdrawal',
        transactionId: '00' + (i % 100),
        amount: '# ' + amount.toFixed(2), 
        status: status,
        action: 'View'
      });
    };

  
  }



 
 
}


