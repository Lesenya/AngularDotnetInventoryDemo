import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { OrderAdminComponent } from "./orderAdmin.component";
import { OverviewComponent } from "./overview.component";
import {ProductAdminComponent} from "./productAdmin.component";
import { ProductEditorComponent } from "./productEditor.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {path: "", component: AdminComponent,
        children: [
            {path: "products", component: ProductAdminComponent},
            {path: "orders", component: OrderAdminComponent},
            {path: "overview", component: OverviewComponent},
            {path: "", component: OverviewComponent},
        ]
    }
];
@NgModule({
    imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
    declarations: [
        AdminComponent, 
        OrderAdminComponent,
         OverviewComponent, 
         ProductAdminComponent, 
         ProductEditorComponent]
})
export class AdminModule {}