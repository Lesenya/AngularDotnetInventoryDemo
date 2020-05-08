import { Component } from '@angular/core';
import { Repository } from './models/repository';
import { Product } from './models/product.model';
import { Supplier } from './models/supplier.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public repo: Repository) {}

  public get product(): Product {
    return this.repo.product;
  }

  public get products(): Product[] {
    return this.repo.products;
  }

  public addProduct() {
    let sup: Supplier = {supplierId: 4};
    let prod: Product = {
      name: "Test Angular Product", 
      description: "This is product created from angular",
      category: "Test" , 
      price: 45, 
      supplier: sup
    };
    this.repo.createProduct(prod);
  }
}
