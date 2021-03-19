import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simple a test', 
        'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French fries', 20)
         ]),
        new Recipe('A Test Recipe 2',
         'This is simple a test',
         'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1',
         [
            new Ingredient('Egg', 3),
            new Ingredient('French fries', 25)
        ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToSoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}