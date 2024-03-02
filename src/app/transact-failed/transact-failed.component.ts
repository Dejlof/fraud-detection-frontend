import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TransactionNavComponent } from '../transaction-nav/transaction-nav.component';

@Component({
  selector: 'app-transact-failed',
  standalone: true,
  imports: [RouterLink, TransactionNavComponent],
  templateUrl: './transact-failed.component.html',
  styleUrl: './transact-failed.component.css'
})
export class TransactFailedComponent {

}
