import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommondPageComponent } from './pages/uncommond-page/uncommond-page.component';

const routes: Routes = [
  {
    path:'',
    component: BasicsPageComponent
  },
  {
    path:'numbers',
    component: NumbersPageComponent
  },
  {
    path:'uncommond',
    component: UncommondPageComponent
  },
  {
    path:'custom',
    component: OrderComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
