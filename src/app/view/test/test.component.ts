import { Component, OnInit } from '@angular/core';
import {Customer} from "../../dto/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name = 'DEP';
  customers: Array<Customer> = [];
  something = '';

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(value => {
      this.customers = value;
    },error => {
      console.log(error);
    });
  }

}
