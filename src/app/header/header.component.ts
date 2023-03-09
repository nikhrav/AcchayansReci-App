import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  
}
  @Output() recipeClicked = new EventEmitter<{recipe: string}>();
  @Output() shoppingListClicked = new EventEmitter<{shopping: string}>();

  OnRecipeClick(){
  this.recipeClicked.emit({recipe:"recipe"});
  }

  OnShoppingListClick(){
    this.shoppingListClicked.emit({shopping:"shopping"});
  }
}
