import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../models/tran-details';
import { TransactionDetailsService } from '../service/transaction-details.service';

@Component({
  selector: 'app-table-heading',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './table-heading.component.html',
  styleUrl: './table-heading.component.css'
})
export class TableHeadingComponent implements OnInit {
  @Input() totalData: number = 0; 
  @Output() filteredData = new EventEmitter<any[]>();
  searchTerm: string = '';

  @Input({required:true})status:string ="";

 
  transactions:Transaction[] = [];
  
  constructor(private transactionDetailsService:TransactionDetailsService) {
    
  }

  ngOnInit() {
    this.transactionDetailsService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
    });
  }
 

  filterData() {
    const filtered = this.transactions.filter(data =>
      data.transaction_id.toString().toLowerCase().includes(this.searchTerm)
    );
    this.filteredData.emit(filtered);
  }
  }

