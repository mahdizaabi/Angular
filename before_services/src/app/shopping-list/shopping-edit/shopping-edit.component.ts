import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Input() ingredients: Ingredient[] | undefined;
  name: string = '' ;
  amount: number = 0;

  constructor() {
  }
  ngOnInit(): void {
  }

  cleanInput(){
    this.name = '';
    this.amount= 0;
  }
  addIngredient(){
    this.ingredients?.push(new Ingredient(this.name,this.amount ));
    this.cleanInput();
    console.log(this.ingredients)
  }

  removeLastIngredient() {
    if(this.ingredients?.length !==0)
    this.ingredients?.pop();
  }

  clearList() {
   while(this.ingredients?.length !==0) {
     this.removeLastIngredient();
   }
  }
}
