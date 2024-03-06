import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Transaction } from '../models/tran-details';
import { RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { TableHeadingComponent } from '../table-heading/table-heading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { TransactionDetailsService } from '../service/transaction-details.service';


@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavigationComponent, RouterLink, FormsModule, ModalComponent, TableHeadingComponent, PaginationComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent implements OnInit   {
  transactions:Transaction[] = [];
  searchTerm: string = '';
  status:string= "Dashboard";
  currentPage: number = 1;
  itemsPerPage: number = 10;
 totData:number = 0;
 

  handleFilteredData(filteredTransactions: Transaction[]) {
    this.transactions = filteredTransactions;
  }

 
 
  constructor(private transactionDetailsService:TransactionDetailsService) {
    
  }

  ngOnInit() {
    this.transactionDetailsService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
      this.totData= transactions.length;
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
  return Math.ceil(this.transactions.length / this.itemsPerPage);
}

get paginatedTransactions(): Transaction[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.transactions.slice(startIndex, startIndex + this.itemsPerPage);
}

changePage(page: number) {
  this.currentPage = page;
}

getButtonClass(transaction: Transaction): string {
  if (transaction.status === 3) {
    return 'bg-yellow-600 hover:bg-yellow-400';
  } else if (transaction.status === 1) {
    return 'bg-red-600 hover:bg-red-400';
  } else {
    return 'bg-green-600 hover:bg-green-400';
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




