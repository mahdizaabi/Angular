import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Recipe} from "../recipe.modal";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  @Input() test: string | undefined;
  @Input() recipes: Recipe[] | undefined;

  //from children of recipelist to recipelist to recipes component: event propagation
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }
  ngOnInit(): void {
  }
  onSelectEventEmitted(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
