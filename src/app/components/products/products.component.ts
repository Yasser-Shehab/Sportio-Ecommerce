import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getAllProducts().subscribe((ps: any) => {
      this.products = ps.data;
    });
  }
}
