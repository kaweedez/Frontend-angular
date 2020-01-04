import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './view/test/test.component';
import {CustomerService} from './service/customer.service';
import {HttpClientModule} from '@angular/common/http';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    component: ManageCustomerComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/customers'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ManageCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModalModule      // << ngBootstrap
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
