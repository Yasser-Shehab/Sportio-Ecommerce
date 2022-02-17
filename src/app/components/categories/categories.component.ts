import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() products: IProduct[] = [];
  @Output() searchProducts: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  search(e: any) {
    this.searchProducts.emit(e.target.value);
  }

  // /////////
  //  ngAfterViewInit(): void {
  //   this.searchForProduct();
  // }

  // filterBySearch(term: string) {
  //   console.log(term);
  //   return this._productService
  //     .getAllProducts()
  //     .pipe(
  //       map((products) =>
  //         products.filter((p) =>
  //           p.title.toLowerCase().includes(term.toLowerCase())
  //         )
  //       )
  //     );
  // }

  // searchForProduct() {
  //   fromEvent<any>(this.input.nativeElement, 'keyup')
  //     .pipe(
  //       map((event) => event.target.value),
  //       debounceTime(500),
  //       distinctUntilChanged(),
  //       switchMap((search) => this.filterBySearch(search))
  //     )
  //     .subscribe((products) => {
  //       this.products = products;
  //       console.log(this.products);
  //     });
  // }
}
