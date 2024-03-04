import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { Transaction } from '../models/tran-details';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { TableHeadingComponent } from '../table-heading/table-heading.component';
import { PaginationComponent } from '../pagination/pagination.component';


@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent, FormsModule, ModalComponent, TableHeadingComponent, PaginationComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent {
  MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];
  status:string= "Monitor";
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totDataMonitor: number = 0;
  totData:number=20;


  handleFilteredData(filteredData: Transaction[]) {
    this.DATAS = filteredData;
  }



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

    this.totDataMonitor = this.DATAS.filter(item => item.status === "Monitor").length;
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
  
 

  get totalPages(): number {
    const monitorData = this.DATAS.filter(item=>item.status === "Monitor");
    return Math.ceil(monitorData.length / this.itemsPerPage);
  }
  
  get paginatedData(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const monitorData = this.DATAS.filter(item=>item.status === "Monitor");
    return monitorData.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  changePage(page: number) {
    this.currentPage = page;
  }
}
