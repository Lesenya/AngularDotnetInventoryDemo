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

@NgModule({
    declarations: [
        CartSummaryComponent,
        CategoryFilterComponent,
        PaginationComponent,
        ProductListComponent,
        ProductSelectionComponent,
        TestComponent,
        CartDetailComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule],
    exports: [ProductSelectionComponent]
})
export class StoreModule {}