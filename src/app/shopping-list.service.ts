import {Ingredient} from './shared/ingredient.model';
export class ShoppingService{
    ingredients:Ingredient[]=[
        new Ingredient("apples",5),
        new Ingredient("tomotoes",10),
      ];

      saveData(ingredient:Ingredient){
        this.ingredients.push(ingredient);
      }

      addIngredients(ingredients:Ingredient[]){
        ingredients.map(i=>{
            this.ingredients.push(i);
        })
        console.log(this.ingredients);
      }
}