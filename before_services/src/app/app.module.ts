import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from "@angular/forms";
import {BasicHighlightDirective} from "./myDirectives/basic-highlight.directive";
import {improvedBasicHighlightDirective} from "./myDirectives/improved-basic-highlight.directive";
import {moreInprovedHighlightDirective} from "./myDirectives/more-inproved-highlight.directive";
import {mmImprovedHighlightDirective} from "./myDirectives/mm-improved-highlight.directive";
import {UnlessDirective} from "./myDirectives/unless.directive";
import {dropdownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, RecipesComponent, RecipeListComponent,
    RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent,BasicHighlightDirective,
    improvedBasicHighlightDirective,moreInprovedHighlightDirective,mmImprovedHighlightDirective, UnlessDirective,dropdownDirective
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
