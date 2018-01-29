import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModel } from './app-routing.model';
import { SharedModule } from './components/shared/shared.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { AuthModule } from './components/auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    AppRoutingModel,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
