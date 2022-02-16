import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  URL = 'https://sportio-backend.herokuapp.com/orders';
  constructor(private _http: HttpClient) {}

  getAllOrders(): Observable<any> {
    const orders = this._http
      .get<any>(this.URL, { withCredentials: true })
      .pipe();
    return orders;
  }
}
