import { Component } from '@angular/core';
import { TransactionNavComponent } from '../transaction-nav/transaction-nav.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transact-success',
  standalone: true,
  imports: [RouterLink, TransactionNavComponent],
  templateUrl: './transact-success.component.html',
  styleUrl: './transact-success.component.css'
})
export class TransactSuccessComponent {

}
