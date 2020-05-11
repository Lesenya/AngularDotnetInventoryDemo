import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from "@angular/common/http";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

@NgModule({
    providers: [Repository, Cart, Order],
    imports: [HttpClientModule]
})
export class ModelModule {}