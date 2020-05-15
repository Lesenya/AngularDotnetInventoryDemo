import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";
import { Supplier } from "../models/supplier.model";

@Component({
    selector: "admin-product-editor",
    templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent {
    constructor(private repo: Repository) {}

    public get product(): Product {
        return this.repo.product;
    }

    public get suppliers(): Supplier[] {
        return this.repo.suppliers;
    }

    public compareSuppliers(s1: Supplier, s2: Supplier) {
        return s1 && s2 && s1.name == s2.name;
    }
}