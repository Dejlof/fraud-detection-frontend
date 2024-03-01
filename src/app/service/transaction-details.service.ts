import { Injectable } from '@angular/core';
import { Transaction } from '../models/tran-details';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {
  MockAccount: number= 1134578901;
  DATAS:Transaction[] = [];

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
        transactionId: + (i % 100),
        amount: '# ' + amount.toFixed(2), 
        status: status,
        action: 'View'
      });
}

}

getTransactionById(transactionId: number) {
  return this.DATAS.find(data => data.transactionId === transactionId);
}

}
