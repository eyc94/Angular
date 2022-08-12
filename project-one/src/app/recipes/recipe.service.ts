import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Al Pastor Tacos',
  //     'This is a picture of delicious tacos.',
  //     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F03%2F19%2Ffideos-secos-tacos-FT-RECIPE0420-1.jpg&q=60',
  //     [
  //       new Ingredient('Pork', 1),
  //       new Ingredient('Tortilla', 10)
  //     ]
  //   ),
  //   new Recipe(
  //     'Hamburger',
  //     'This is a picture of an In-N-Out burger.',
  //     'https://www.discoverlosangeles.com/sites/default/files/media/activities/in-n-out-double-double-animal-style_1.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp',
  //     [
  //       new Ingredient('Meet', 2),
  //       new Ingredient('Cheese', 2),
  //       new Ingredient('Buns', 2)
  //     ]
  //   )
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
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
