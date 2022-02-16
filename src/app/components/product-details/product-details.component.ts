import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};
  products = [
    {
      id: 1,
      title: 'title 2',
      price: 234,
    },
    {
      id: 2,
      title: 'title 3',
      price: 234,
    },
    {
      id: 3,
      title: 'title 4',
      price: 234,
    },
    {
      id: 4,
      title: 'title 4',
      price: 234,
    },
  ];

  constructor(
    private router: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((value: any) => {
      this._productsService.getSingleProduct(value.params.id).subscribe((p) => {
        this.product = p;
      });
    });
  }
}
