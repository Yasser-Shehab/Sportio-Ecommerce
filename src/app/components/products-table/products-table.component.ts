import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private _productsServices: ProductsService) {}

  ngOnInit(): void {
    this._productsServices.getAllProducts().subscribe((p: any) => {
      this.products = p.data;
    });
  }
}
