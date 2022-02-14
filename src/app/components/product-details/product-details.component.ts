import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products = [
    {
      id:1,
      title: 'title 2',
      price: 234,
    },
    {
      id:2,
      title: 'title 3',
      price: 234,
    },
    {
      id:3,
      title: 'title 4',
      price: 234,
    },
    {
      id:4,
      title: 'title 4',
      price: 234,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
