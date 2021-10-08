import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsDetailsPage } from './products-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsDetailsPageRoutingModule {}
