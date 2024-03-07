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
  destinationAccountNumber:number = 0;
  amount:number = 0;
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
    
  
    // this.transactionService.createTransaction(id, timestamp, balance, transaction_id, accountNumber, status, this.destinationAccountNumber, this.amount, this.country)
    //     .subscribe(
    //         response => {
    //             this.router.navigateByUrl("transaction-successful");
    //             console.log(response);
    //             this.cdRef.detectChanges();
              

    //         },
    //         error => {
    //             console.error('Error creating transaction:', error);
    //             this.router.navigateByUrl("transaction-failed");
    //             this.cdRef.detectChanges(); 
    //         }
    //     );
}

generateRandomId(): number {
  return 1996;
}

getCurrentTimestamp(): string{
  return "2025-10-04"
}

getCurrentBalance(): number {
  return 1389.8991;
}

generateRandomTransactionId(): number {
 return 1697399020;
}

getAccountNumber(): number {
  return 7850464990;
}

getDefaultStatus(): number {
return 2;

}


}



