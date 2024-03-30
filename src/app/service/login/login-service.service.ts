import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../../models/admin';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { 

  }

  login(admin: Admin): Observable<any> {
      return this.http.post('http://localhost:5156/api/Admin/login', admin, {responseType: 'text'});
  }
}
