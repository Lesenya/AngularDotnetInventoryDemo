import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from "@angular/common/http";
import { Cart } from "./cart.model";

@NgModule({
    providers: [Repository, Cart],
    imports: [HttpClientModule]
})
export class ModelModule {}