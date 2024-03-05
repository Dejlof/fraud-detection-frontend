import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { Transaction } from '../models/tran-details';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { TableHeadingComponent } from '../table-heading/table-heading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { TransactionDetailsService } from '../service/transaction-details.service';


@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent, FormsModule, ModalComponent, TableHeadingComponent, PaginationComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent implements OnInit {
  transactions:Transaction[] = [];
  status:string= "Monitor";
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totDataMonitor: number = 10;
  

  handleFilteredData(filteredTransactions: Transaction[]) {
    this.transactions = filteredTransactions;
  }

 
  constructor(private transactionDetailsService:TransactionDetailsService) {
    
  }

  ngOnInit() {
    this.transactionDetailsService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
    });
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
    return data.id
  }
  
 

  get totalPages(): number {
    const monitorData = this.transactions.filter(item=>item.status === 2);
    return Math.ceil(monitorData.length / this.itemsPerPage);
  }
  
  get paginatedTransactions(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const monitorData = this.transactions.filter(item=>item.status === 2);
    return monitorData.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  changePage(page: number) {
    this.currentPage = page;
  }
}
