import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Transaction } from '../models/tran-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:5156/api";

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getHeadersWithToken(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getTokenFromStorage();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${BASE_URL}/Transactions`, {
      headers: this.getHeadersWithToken()
    });
  }
  createTransaction(id:number, timestamp:string, balance:number, accountNumber:number, status:number, transaction_id:number, destinationAccountNumber: number, amount: number, country: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    const body = {
      id:id,
      country: country,
      timestamp:timestamp,
      amount: amount,
      balance:balance,
      accountNumber:accountNumber,
      status:status,
      destinationAccountNumber: destinationAccountNumber,
      transaction_id:transaction_id
    };
    return this.http.post<Transaction>(`${BASE_URL}/Transactions`, body, { headers });
  }

  getTransactionById(transactionId: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${BASE_URL}/Transactions/${transactionId}`, {
      headers: this.getHeadersWithToken()
    });
  }

  private getTokenFromStorage(): string | null {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('token');
    }
    return null;
  }
}