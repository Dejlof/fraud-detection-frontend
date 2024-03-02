import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Transaction } from '../models/tran-details';
import { RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent, RouterLink, FormsModule, ModalComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {
MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];
  searchTerm: string = '';

  get filteredData() {
    return this.DATAS.filter(data =>
      data.accountNumber.toString().includes(this.searchTerm.toLowerCase())
    );
  }
 
  

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
    };
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



getTracker(data:Transaction):number {
  return data.transactionId
}


}


