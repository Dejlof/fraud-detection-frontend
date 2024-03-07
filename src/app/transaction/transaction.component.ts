import { Component } from '@angular/core';
import { TransactionNavComponent } from '../transaction-nav/transaction-nav.component';
import { TransactionDetailsService } from '../service/transaction-details.service';
import { TransactSuccessComponent } from '../transact-success/transact-success.component';
import { TransactFailedComponent } from '../transact-failed/transact-failed.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [TransactionNavComponent, TransactSuccessComponent, TransactFailedComponent, FormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  destinationAccountNumber:number = 0.00;
  amount:number = 0.00;
  country:string = "";


  constructor(private transactionService: TransactionDetailsService,
    private router:Router, private cdRef:ChangeDetectorRef) { 

  }

  onSubmit (): void {
    const id = this.generateRandomId();
    const timestamp = this.getCurrentTimestamp();
    const balance = this.getCurrentBalance();
    const transaction_id = this.generateRandomTransactionId();
    const accountNumber = this.getAccountNumber();
    const status = this.getDefaultStatus();

    console.log(id, timestamp, balance, transaction_id, accountNumber, status, this.amount, this.destinationAccountNumber, this.country);
    
  
     this.transactionService.createTransaction(id, timestamp, balance, transaction_id, accountNumber, status, this.destinationAccountNumber, this.amount, this.country)
        .subscribe(
           response => {
                this.router.navigateByUrl("transaction-successful");
              console.log(response);
                this.cdRef.detectChanges()     

         },
            error => {
               console.error('Error creating transaction:', error);
               this.router.navigateByUrl("transaction-failed");
                this.cdRef.detectChanges(); 
            }
        );
}

generateRandomId(): number {

  const min = 5000;
    const max = Number.MAX_SAFE_INTEGER; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getCurrentTimestamp(): string{
   const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

getCurrentBalance(): number {
  return 1389.8991;
}

generateRandomTransactionId(): number {
  const min = 1000000000; 
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getAccountNumber(): number {
  return 7850464990;
}

getDefaultStatus(): number {
return 2;

}


}



