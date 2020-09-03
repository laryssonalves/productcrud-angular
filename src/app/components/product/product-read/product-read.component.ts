import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ProductReadDataSource } from './product-read-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductReadDataSource
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.dataSource = new ProductReadDataSource(this.products);
    this.productService.read().subscribe((response) => {
      this.products = response
      this.dataSource.data = response
      console.log(response)
    })

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
