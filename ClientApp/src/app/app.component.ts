import { Component } from '@angular/core';
import { Repository } from './models/repository';
import { Product } from './models/product.model';

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
}
