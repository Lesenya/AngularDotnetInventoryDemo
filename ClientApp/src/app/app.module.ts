import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ModelModule } from './models/model.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store/store.module';
import { ErrorHandlerService } from './errorHandler.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ModelModule,
    StoreModule,
    FormsModule
  ],
  providers: [ErrorHandlerService, {provide: HTTP_INTERCEPTORS, useExisting: ErrorHandlerService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
