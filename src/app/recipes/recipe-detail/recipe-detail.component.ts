import { Component, OnInit,Output ,EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ShoppingService} from '../../shopping-list.service';
import {Route,ActivatedRoute, Routes, Router} from '@angular/router';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor(private shoppingList:ShoppingService,private route:Router,private activatedRoute:ActivatedRoute,private recipeService:RecipeService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p=>{
      this.recipe=this.recipeService.getByName(p.id);
      console.log(this.recipe);
    })
    
  }

  showDetails(){
  }

  toShoppingList(){
    // this.shoppingList.addIngredients(this.recipe.ingredients);
  }

}
