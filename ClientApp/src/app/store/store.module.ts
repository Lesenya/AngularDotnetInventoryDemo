import { NgModule } from "@angular/core";
import { CartSummaryComponent } from "./cartSummary.component";
import { CategoryFilterComponent } from "./categoryFilter.component";
import { PaginationComponent } from "./pagination.component";
import { ProductListComponent } from "./productList.component";
import { ProductSelectionComponent } from "./productSelection.component";
import { BrowserModule } from "@angular/platform-browser";
import { TestComponent } from "./test.component";
import { CartDetailComponent } from "./cartDetail.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CheckoutPaymentComponent } from "./checkout/checkoutPayment.component";
import { CheckoutDetailsComponent } from "./checkout/checkoutDetails.component";
import { CheckoutSummaryComponent } from "./checkout/checkoutSummary.component";
import { OrderConfirmationComponent } from "./checkout/orderConfirmation.component";

@NgModule({
    declarations: [
        CartSummaryComponent,
        CategoryFilterComponent,
        PaginationComponent,
        ProductListComponent,
        ProductSelectionComponent,
        TestComponent,
        CartDetailComponent,
        CheckoutDetailsComponent,
        CheckoutSummaryComponent,
        OrderConfirmationComponent,
        CheckoutPaymentComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule],
    exports: [ProductSelectionComponent]
})
export class StoreModule {}