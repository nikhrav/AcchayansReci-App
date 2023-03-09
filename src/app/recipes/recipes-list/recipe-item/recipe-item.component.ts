import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  
  // @Input() recipe: {name: string, description: string, imagePath: string};
  //    OR
  @Input() recipe: Recipe;
  @Output() recipeItemClicked = new EventEmitter<Recipe>();

  constructor(){}

  ngOnInit(): void {
    
  }

  OnRecipeItemClick(){
    this.recipeItemClicked.emit(this.recipe);
  }

}
