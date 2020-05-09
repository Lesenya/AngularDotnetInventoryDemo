import { Component, Input } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
    selector: "store-test",
    templateUrl: "./test.component.html"
})
export class TestComponent {
    @Input()
    product: Product;
    
    public get discount(): number {
        return this.product.price;
    }
}