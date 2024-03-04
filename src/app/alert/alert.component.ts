import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { Transaction } from '../models/tran-details';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { TableHeadingComponent } from '../table-heading/table-heading.component';
import { PaginationComponent } from '../pagination/pagination.component';


@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent, ModalComponent, FormsModule, TableHeadingComponent, PaginationComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];
  searchTerm: string = '';
  status:string= "Alert";
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totData:number=20;
  totDataCritical:number = 0;

 
  handleFilteredData(filteredData: Transaction[]) {
    this.DATAS = filteredData;
  }


  get filteredData() {
    return this.DATAS.filter(data =>
      data.accountNumber.toString().includes(this.searchTerm.toLowerCase())
    );
  }

 

  constructor(private router:Router) {
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

    this.totDataCritical = this.DATAS.filter(item => item.status === "Critical").length;
    
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
    const criticalData = this.DATAS.filter(item=>item.status === "Critical");
    return Math.ceil(criticalData.length / this.itemsPerPage);
  }
  
  get paginatedData(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const criticalData = this.DATAS.filter(item=>item.status === "Critical");
    return criticalData.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  changePage(page: number) {
    this.currentPage = page;
  }
  
}
