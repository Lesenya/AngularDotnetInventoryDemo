import { NgModule } from "@angular/core";
import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationGuard } from "./authentication.guard";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AuthenticationComponent],
    providers: [AuthenticationService, AuthenticationGuard],
    exports: [AuthenticationComponent],
    imports: [RouterModule, FormsModule, CommonModule]
})
export class AuthModule {}