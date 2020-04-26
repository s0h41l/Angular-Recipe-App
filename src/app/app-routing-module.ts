import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import {RecipesComponent} from './recipes/recipes.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {AddRecipeComponent} from './recipes/add-recipe/add-recipe.component';


const appRoutes:Routes=[
    {path:'recipes',component:RecipesComponent,children:[
        {path:'addRecipe',component:AddRecipeComponent},
        {path:':id',component:RecipeDetailComponent},
    ]},
    {path:'shopping',component:ShopingListComponent},
    {path:'**',component:RecipesComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingService{

}