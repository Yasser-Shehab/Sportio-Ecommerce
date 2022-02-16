import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  URL = 'https://sportio-backend.herokuapp.com/categories';

  constructor(private _http: HttpClient) {}

  getCategoryProducts(categoryID: string): Observable<IProduct[]> {
    const products = this._http
      .get<IProduct[]>(`${this.URL}/${categoryID}`)
      .pipe();
    return products;
  }
}
