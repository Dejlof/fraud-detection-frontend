import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { Transaction } from '../models/tran-details';


@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent {
  MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;

 totData:number=20;

  constructor() {
    for (let i = 1; i <= this.totData; i++) {
      const amount = i * 3500; 
      let status = 'Good'; 
      let method ='Withdrawal';
      if (amount > 15000 && amount <= 30000) {
        status = 'Monitor';
        method= 'Transfer';
      } else if (amount > 30000) {
        status = 'Critical';
        method='Credit';
      }

      this.DATAS.push({
        accountNumber: this.MockAccount + i,
        date: 'March ' + (17 - i % 17) + ', 2024',
        method: method,
        transactionId: (i % 10 + 1010),
        amount: '# ' + amount.toFixed(2), 
        status: status,
        action: 'View'
      });
    }
  }

  transaction:Transaction|undefined;


  openModal(transaction: Transaction) {
    this.transaction = transaction;
    const modal = document.getElementById("crypto-modal");
    const container = document.getElementById("container");
    if (modal) {
      modal.style.display = "flex";
      if (container) {
        container.style.filter = "blur(2px)";
      }
    }
  }
  
  closeModal(){
    const modal = document.getElementById("crypto-modal");
    const container = document.getElementById("container");
    if (modal) {
      modal.style.display = "none";
      if (container) {
        container.style.filter = "blur(0px)";
      }
    }
  }

}
