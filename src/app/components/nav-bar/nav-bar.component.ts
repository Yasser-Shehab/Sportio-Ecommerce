import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Subscription } from 'rxjs';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = false;
  isAdmin: boolean = false;
  cartLength: number = 0;
  subscription: Subscription = new Subscription();

  constructor(
    private _usersServices: UsersService,
    private _orderServices: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const decoded: { role: string } = jwt_decode(token!);
    if (decoded.role === 'admin') {
      this.loggedIn = true;
      this.isAdmin = true;
    } else {
      this.loggedIn = true;
    }

    // get items in cart
    this.subscription = this._orderServices
      .getCartItems()
      .subscribe((res: any) => {
        this.cartLength = res.length;
      });

    this.cartLength = JSON.parse(
      localStorage.getItem('cart') as string
    )?.length;
  }

  logout() {
    this._usersServices.logout().subscribe(() => {
      localStorage.removeItem('token');
      this.loggedIn = false;
      this.isAdmin = false;
      this.router.navigate(['/']);
    });
  }
}
