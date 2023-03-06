import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes:Recipe[] =[
    new Recipe('A Test Recipe', 'A Test Description',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' ),
    new Recipe('B Test Recipe', 'B Test Description',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' )]; 
  constructor()  {    
  }

  ngOnInit(){
  }
}
