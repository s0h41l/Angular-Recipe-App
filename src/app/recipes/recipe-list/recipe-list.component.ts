import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[new Recipe("A test recipe","this is test","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
  new Recipe("A test recipe","this is test","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
  new Recipe("A test recipe","this is test","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
];

  constructor() { }

  ngOnInit(): void {
  }

}
