import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [{
    id: 1,
    title: 'Bolo Assado Com Doces',
    slug: 'bolo-assado-com-doces',
    price: 25,
    portions: 12,
    description: 'Bolo Assado Com Doces No Topo',
    imgUrl: 'https://images.pexels.com/photos/709841/pexels-photo-709841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 2,
    title: 'Bolo de Chocolate',
    slug: 'bolo-de-chocolate',
    price: 15,
    portions: 10,
    description: 'Bolo de Chocolate',
    imgUrl: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 3,
    title: 'Bolo Fondant Branco',
    slug: 'bolo-fondant-branco',
    price: 60,
    portions: 25,
    description: 'Bolo Fondant Branco',
    imgUrl: 'https://images.pexels.com/photos/265801/pexels-photo-265801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
  ];

  constructor() { }

  getProducts () {
    return this.products;
  }

  getProductBySlug (slug: string) {
    return this.products.find(product => product.slug === slug);
  }
}
