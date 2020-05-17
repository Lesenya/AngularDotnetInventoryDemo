import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { AuthenticationService } from "../auth/authentication.service";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {
    constructor(private repo: Repository, public authService: AuthenticationService) {
       // repo.getProducts();
        repo.getSuppliers();
        repo.getOrders();
    }
}