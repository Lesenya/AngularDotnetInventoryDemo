import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductSelectionComponent } from "./store/productSelection.component";
import { CartDetailComponent } from "./store/cartDetail.component";

const routes: Routes = [
    {path: "store", component: ProductSelectionComponent},
    {path: "cart", component: CartDetailComponent},
    {path: "", redirectTo: "/store", pathMatch: "full"}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}