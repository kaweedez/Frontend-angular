import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>('http://localhost:8080/api/v1/customers');
  }

  saveCustomer(customer: Customer): Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/v1/customers', customer);
  }
}
