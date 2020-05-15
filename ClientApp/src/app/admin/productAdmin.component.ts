import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";

@Component({
    templateUrl: "productAdmin.component.html"
})
export class ProductAdminComponent {
    constructor(private repo: Repository) {}
    public tableMode: boolean = true;

    public get product(): Product {
        return this.repo.product;
    }
    public get products(): Product[] {
        return this.repo.products;
    }
    public selectProduct(id: number) {
        this.repo.getProduct(id);
    }
    public saveProduct() {
        if(this.repo.product.productId == null) {
            this.repo.createProduct(this.repo.product);
        } else {
            this.repo.updateProduct(this.repo.product);
        }
    }
    public deleteProduct(id: number) {
        this.repo.deleteProduct(id);
    }
    public clearProduct() {
        this.repo.product = new Product();
        this.tableMode = true;
    }
}