import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  productTest: Product = {
    name: 'Produto Test',
    price: 125.98
  }

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.productTest).subscribe(() => {
      this.productService.showMessage('Produto criado')
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
