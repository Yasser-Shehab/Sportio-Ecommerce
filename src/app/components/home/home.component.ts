import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private _productsServices: ProductsService) {}

  ngOnInit(): void {
    this._productsServices.getAllProducts().subscribe((result: any) => {
      this.products = result.data;
    });
    window.scroll(0, 0);
  }

  searchProducts(val: any) {
    this._productsServices.getAllProducts().subscribe((result: any) => {
      this.products = result.data.filter((product: any) => {
        return product.title.toLowerCase().includes(val.toLowerCase());
      });
    });
  }
}
