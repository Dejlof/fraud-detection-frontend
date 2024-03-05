import { Injectable } from '@angular/core';
import { Transaction } from '../models/tran-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_URL =" http://localhost:5156/api";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application-json' }),
  };
@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${BASE_URL}/Transactions`, httpOptions);
  }

  getUserById(transactionId: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${BASE_URL}/Transactions/${transactionId}`, httpOptions);
  }

}
