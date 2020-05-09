import { NgModule } from "@angular/core";
import { CartSummaryComponent } from "./cartSummary.component";
import { CategoryFilterComponent } from "./categoryFilter.component";
import { PaginationComponent } from "./pagination.component";
import { ProductListComponent } from "./productList.component";
import { ProductSelectionComponent } from "./productSelection.component";
import { BrowserModule } from "@angular/platform-browser";
import { TestComponent } from "./test.component";

@NgModule({
    declarations: [
        CartSummaryComponent,
        CategoryFilterComponent,
        PaginationComponent,
        ProductListComponent,
        ProductSelectionComponent,
        TestComponent
    ],
    imports: [BrowserModule],
    exports: [ProductSelectionComponent]
})
export class StoreModule {}