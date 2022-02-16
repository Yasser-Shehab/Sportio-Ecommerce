import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  URL = 'https://sportio-backend.herokuapp.com/products';
  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    const products = this._http.get<IProduct[]>(this.URL).pipe();
    return products;
  }
  getSingleProduct(productID: string): Observable<IProduct> {
    const product = this._http.get<IProduct>(`${this.URL}/${productID}`).pipe();
    return product;
  }
}
