import { Injectable } from '@angular/core/';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Foie Gras', 
            'Luxury food product', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQst1V1e-OsHa3ryiuuZHf1ShSO1I6kf2To0SQkFNEzR4l1lAocsg',
            [
                new Ingredient('Duck', 1),
                new Ingredient('Sea salt ', 1),
                new Ingredient('White pepper ', 3)
            ]
        ),
        new Recipe(
            'Chicken', 
            'Just simple, sweet and tasty meat', 
            'http://assets.kraftfoods.com/recipe_images/opendeploy/62663_640x428.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Pepper', 2)
            ]
        ),
    ];
    
    constructor (private shoppingListService: ShoppingListService) {}

    setRecipes (recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }

    addToCart(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}