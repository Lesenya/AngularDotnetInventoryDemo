import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";
import { Cart } from "../models/cart.model";

@Component({
    selector: "store-product-list",
    templateUrl: "./productList.component.html"
})
export class ProductListComponent {
    constructor(private repo: Repository, private cart: Cart) {}

    public get products(): Product[] {
        return this.repo.products;
    }
    public addToCart(product) {
        this.cart.addProduct(product);
        console.log(this.cart.totalPrice);
    }
}