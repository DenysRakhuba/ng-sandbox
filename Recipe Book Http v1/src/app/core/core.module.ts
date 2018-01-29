import { NgModule } from "@angular/core";

import { HeaderComponent } from "../components/header/header.component";
import { HomeComponent } from "../components/home/home.component";
import { SharedModule } from "../components/shared/shared.module";
import { AppRoutingModel } from "../app-routing.model";
import { ShoppingListService } from "../components/shopping-list/shopping-list.service";
import { RecipeService } from "../components/recipes/recipe.service";
import { DataStorageService } from "../components/shared/data-storage.service";
import { AuthService } from "../components/auth/auth.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModel
    ],
    exports: [
        AppRoutingModel,
        HeaderComponent,
    ],
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService,
        AuthService
    ]
})
export class CoreModule {} 

// ng build --prod --aot