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

  deleteCustomer(id: string): Observable<string> {
        const url = 'http://localhost:8080/api/v1/customers/' + id;
        return this.http.delete<string>(url);
    }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('http://localhost:8080/api/v1/customers/' + customer.id, customer);
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/api/v1/customers/' + id);
  }
}
