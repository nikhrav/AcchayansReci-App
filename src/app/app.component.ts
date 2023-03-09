import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AcchayansReci-App';
  isRecipeVisible:boolean = true;  
  constructor(){}
  
  ngOnInit(): void {
    
  }

  onRecipeClicked(recipe: string){
    this.isRecipeVisible = true;    
  }

  onShoppingListClicked(shoppingList:string){
    this.isRecipeVisible = false;    
  }
}
