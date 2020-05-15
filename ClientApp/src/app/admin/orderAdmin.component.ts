import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Order } from "../models/order.model";

@Component({
    templateUrl: "orderAdmin.component.html"
})
export class OrderAdminComponent {
    constructor(private repo: Repository) {}

    public get orders(): Order[] {
        return this.repo.orders;
    }
    
    public markShipped(order: Order) {
        this.repo.shipOrder(order);
    }
}