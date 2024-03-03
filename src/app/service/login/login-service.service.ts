import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../../models/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { 

  }

  login(admin: Admin): Observable<any> {
    return this.http.post('https://localhost:44314/api/Login', admin);
  }
}
