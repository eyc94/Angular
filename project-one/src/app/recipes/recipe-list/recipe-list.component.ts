import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/3:4/w_1800,h_2400,c_limit/0701-tj-recipe-potato-v2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
