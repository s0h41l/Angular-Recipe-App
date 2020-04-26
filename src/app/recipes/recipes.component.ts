import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes:Recipe[]=[];
  recipe:Recipe;

  constructor(private recipeServe:RecipeService){
    this.recipeServe.expandRecipe.subscribe((r)=>{
      this.recipe=r;
    });
  }

  ngOnInit(): void {
    // this.recipes=this.recipeServe.recipes;
  }

}
