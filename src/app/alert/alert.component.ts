import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { Transaction } from '../models/tran-details';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { TableHeadingComponent } from '../table-heading/table-heading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { TransactionDetailsService } from '../service/transaction-details.service';


@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent, ModalComponent, FormsModule, TableHeadingComponent, PaginationComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
 transactions:Transaction[] = [];
  searchTerm: string = '';
  status:string= "Alert";
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totData:number=20;
  totDataCritical:number =  0

  handleFilteredData(filteredTransactions: Transaction[]) {
    this.transactions = filteredTransactions;
  }

 
  constructor(private transactionDetailsService:TransactionDetailsService,
    private router:Router) {
    
  }

  ngOnInit() {
    this.transactionDetailsService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
      this.totDataCritical=this.transactions.filter(item=> item.status === 1).length;;
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
  

  getTracker(data:Transaction):number {
    return data.id
  }

  get totalPages(): number {
    const criticalData = this.transactions.filter(item=>item.status === 1);
    return Math.ceil(criticalData.length / this.itemsPerPage);
  }
  
  get paginatedTransactions(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const criticalData = this.transactions.filter(item=> item.status === 1);
    return criticalData.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  changePage(page: number) {
    this.currentPage = page;
  }
  getReportMessage(amount: number): string {
    if (amount >= 0 && amount < 1000) {
      return 'Reported to Customer Service';
    } else if (amount >= 1000 && amount < 3000) {
      return 'Reported Internal Fraud Team';
    } else if (amount >= 3000) {
      return 'Reported to NIBSS';
    } else {
      return ''; 
    }
  }
}
