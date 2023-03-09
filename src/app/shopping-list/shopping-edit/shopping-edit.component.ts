import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('quantityInput', { static: false }) quantityInputRef: ElementRef;  

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(){}

  ngOnInit(): void {    
  }

  onAddClicked(){
    var quan = this.quantityInputRef.nativeElement.value;
    var newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, quan)
    this.ingredientAdded.emit(newIngredient);
  }
}



