import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../dto/customer';
import {animate, style, transition, trigger} from '@angular/animations';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss'],
  animations: [trigger('fade',

    [
      transition(':leave',
        [
          animate('0.3s', style({
            backgroundColor: 'red'
          })),
          animate('0.5s', style({
            opacity: 0
          }))
        ]
      )
    ]
  )]
})
export class ManageCustomerComponent implements OnInit, AfterViewInit {

  customers: Array<Customer> = [];
  customer: Customer = new Customer('', '', '');
  update = false;
  @ViewChild('txtId', {static: false})
  txtId: ElementRef;
  selectedCustomer: Customer = null;

  constructor(private modalService: NgbModal, private customerService: CustomerService) {

  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    (this.txtId.nativeElement as HTMLInputElement).focus();
  }

  saveCustomer(): void {
    if (!this.update) {
      this.customers.push(this.customer);
      this.customerService.saveCustomer(this.customer).subscribe(id => {
        alert(id);
      }, error => {
        console.log(error);
      });
    } else {
      /*      for (const c of this.customers) {
              if (c.id === this.customer.id){
                c.name = this.customer.name;
                c.address = this.customer.address;
                break;
              }
            }*/
      const c = this.customers.find(c => {
        return c.id == this.customer.id;
      });
      c.name = this.customer.name;
      c.address = this.customer.address;
    }
    this.customer = new Customer('', '', '');
    this.update = false;
    this.selectedCustomer = null;
    (this.txtId.nativeElement as HTMLInputElement).focus();
  }

  /*  @ViewChild('txtId',{static: false})
    txtId: ElementRef;*/

  selectCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
    this.update = true;
    this.customer = new Customer(customer.id, customer.name, customer.address);
  }

  deleteCustomer(customer: Customer): void {
    if (confirm('Are you sure to delete this customer?')) {
      const index = this.customers.indexOf(customer);
      this.customers.splice(index, 1);
    }
    this.selectedCustomer = null;
  }

  clear(): void {
    this.update = false;
    this.customer = new Customer('', '', '');
    this.selectedCustomer = null;
  }

}
