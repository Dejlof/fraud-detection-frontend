import { Component } from '@angular/core';
import { TransactionNavComponent } from '../transaction-nav/transaction-nav.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [TransactionNavComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

}
