import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersSPComponent } from './components/orders-sp/orders-sp.component';
import { OrdersItemSPComponent } from './components/orders-item-sp/orders-item-sp.component';
import { OrdersDetailsSPComponent } from './components/orders-details-sp/orders-details-sp.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersSPComponent
  },
  {
    path: 'OrdersItemSP',
    component: OrdersItemSPComponent
  },
  {
    path: 'OrdersDetailsSP',
    component: OrdersDetailsSPComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
