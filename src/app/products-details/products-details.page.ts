import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../products/products.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  public slug: string;
  product: Product = {
    "id": 1,
    "title": "Bolo assado com doces",
    "slug": "bolo-assado-com-doces",
    "price": 25,
    "portions": 12,
    "description": "Bolo assado com doces no topo",
    "imgUrl": "https://images.pexels.com/photos/709841/pexels-photo-709841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  };

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService) { }

  ngOnInit () {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.productsService.getProductBySlug(this.slug).subscribe(response => {
      this.product = response[0]
    });
  }

  onClick () {
    this.router.navigate([`request/${this.slug}`]);
  }

}
