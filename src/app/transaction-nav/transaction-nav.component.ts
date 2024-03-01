import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './transaction-nav.component.html',
  styleUrl: './transaction-nav.component.css'
})
export class TransactionNavComponent {

}
