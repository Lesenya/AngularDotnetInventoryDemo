import { Component } from "@angular/core";
import { Order } from "src/app/models/order.model";
import { Router } from "@angular/router";

@Component({
    templateUrl: "checkoutSummary.component.html"
})
export class CheckoutSummaryComponent {
    constructor(private router: Router, public order: Order) {
        console.log(order.payment);
        if(order.payment.cardSecurityCode == null || 
            order.payment.cardNumber == null || 
            order.payment.cardExpiry == null) {
                console.log("here");
            router.navigateByUrl("/checkout/step2");
        }
    }
    submitOrder() {
        this.order.submit();
        this.router.navigateByUrl("/checkout/confirmation");
    }
}