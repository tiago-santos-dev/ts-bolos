import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number,
  title: string,
  slug: string,
  price: number,
  portions: number,
  description: string,
  imgUrl: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts () {
    return this.http.get<[Product]>(`${this.baseUrl}/products`)
  }

  getProductBySlug (slug: string) {
    return this.http.get<Product>(`${this.baseUrl}/products?slug=${slug}`)

  }
}
