import {EventEmitter} from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';

export class RecipeService{
    recipes:Recipe[]=[new Recipe("Omelete","this is test","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg",[
        new Ingredient("apples",5),
        new Ingredient("tomotoes",10),
    ]),
    new Recipe("Suop","this is test","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg",[
        new Ingredient("apples",5),
        new Ingredient("tomotoes",10),
    ]),
    new Recipe("Biryani","this is test","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",[
        new Ingredient("apples",5),
        new Ingredient("tomotoes",10),
    ])
  ];
  expandRecipe=new EventEmitter<Recipe>();

  getByName(name:string){
      return this.recipes.find(x=>x.name==name);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }
}