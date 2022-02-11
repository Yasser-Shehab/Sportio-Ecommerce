import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      title: 'title 1',
      price: 234,
    },
    {
      title: 'title 2',
      price: 234,
    },
    {
      title: 'title 3',
      price: 234,
    },
    {
      title: 'title 4',
      price: 234,
    },
    {
      title: 'title 5',
      price: 234,
    },
    {
      title: 'title 6',
      price: 234,
    },
    {
      title: 'title 7',
      price: 234,
    },
    {
      title: 'title 8',
      price: 234,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
