import { Component } from "@angular/core";
import { Repository } from "../models/repository";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {
    constructor(private repo: Repository) {
       // repo.getProducts();
        repo.getSuppliers();
        repo.getOrders();
    }
}