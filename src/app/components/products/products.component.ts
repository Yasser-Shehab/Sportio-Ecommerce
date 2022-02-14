import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      id:0,
      title: 'title 2',
      price: 234,
    },
    {
      id:1,
      title: 'title 3',
      price: 234,
    },
    {
      id:2,
      title: 'title 4',
      price: 234,
    },
    {
      id:3,
      title: 'title 5',
      price: 234,
    },
    {
      id:4,
      title: 'title 6',
      price: 234,
    },
    {
      id:5,
      title: 'title 7',
      price: 234,
    },
    {
      id:6,
      title: 'title 8',
      price: 234,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
