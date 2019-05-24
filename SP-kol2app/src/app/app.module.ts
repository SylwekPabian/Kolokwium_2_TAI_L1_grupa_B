import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrdersSPComponent } from './components/orders-sp/orders-sp.component';
import { OrdersItemSPComponent } from './components/orders-item-sp/orders-item-sp.component';
import { OrdersDetailsSPComponent } from './components/orders-details-sp/orders-details-sp.component';
import {SPDataService} from './services/sp-data.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OrdersSPComponent,
    OrdersItemSPComponent,
    OrdersDetailsSPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SPDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
