import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../models/tran-details';

@Component({
  selector: 'app-table-heading',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './table-heading.component.html',
  styleUrl: './table-heading.component.css'
})
export class TableHeadingComponent {
  @Input() totalData: number = 0; 
  @Output() filteredData = new EventEmitter<any[]>();
  searchTerm: string = '';

  @Input({required:true})status:string ="";

  MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];
  

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

  filterData() {
    const filtered = this.DATAS.filter(data =>
      data.accountNumber.toString().toLowerCase().includes(this.searchTerm)
    );
    this.filteredData.emit(filtered);
  }
  }

