import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};
  category: any = '';
  products: any = [];

  constructor(
    private router: ActivatedRoute,
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((value: any) => {
      this._productsService.getSingleProduct(value.params.id).subscribe((p) => {
        this.product = p;
        console.log(p.categoryId);

        this.category = p.categoryId;
      });
    });
    window.scroll(0, 0);
    // ---- Products from cayegory ----

    this._categoriesService
      .getCategoryProducts('6206bf91f00b0df5743fa73c')
      .subscribe((products) => {
        this.products = products;
      });
  }
}
