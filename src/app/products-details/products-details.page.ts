import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  public slug: string;
  product;

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.product = this.productsService.getProductBySlug(this.slug);
  }

  onClick() {
    this.router.navigate([`request/${this.slug}`]);
  }

}
