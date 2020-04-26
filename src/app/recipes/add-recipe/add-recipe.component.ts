import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  name:string="";
  description:string="";
  imageUrl:string="";

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  save(){
    this.recipeService.addRecipe(new Recipe(this.name,this.description,this.imageUrl,[]))
    this.name="";
    this.description="";
    this.imageUrl="";
  }

}
