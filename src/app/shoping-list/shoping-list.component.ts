import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients:Ingredient[]=[];

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingService.ingredients;
  }

  saveData(ingredient:Ingredient){
    this.shoppingService.saveData(ingredient)
  }

}
