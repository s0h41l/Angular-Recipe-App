import { Component } from '@angular/core';
import {RecipeService} from './recipe.service';
import {ShoppingService} from './shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService,ShoppingService]
})
export class AppComponent {
  title = 'recipeapp';
  page:string="recipe";

  constructor(private recipeServer:RecipeService,private shoppingService:ShoppingService){}

  openShopping(){
    this.page="shopping";
  }

  openRecipe(){
    this.page="recipe";
  }

  navigation(event:{name:string}){
    if(event.name=='recipe'){
      this.openRecipe();
    }else{
      this.openShopping();
    }
  }
}
