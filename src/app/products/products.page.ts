import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit () {
    this.products = this.productsService.getProducts();
  }

}
