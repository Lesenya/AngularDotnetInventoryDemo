import { Component } from "@angular/core";
import { Cart } from "../models/cart.model";

@Component({
    selector: "store-cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {
    constructor(private cart: Cart) {}

    public get totalPrice(): number {
        return this.cart.totalPrice;
    }

    public get itemCount(): number {
        return this.cart.itemCount;
    }
}