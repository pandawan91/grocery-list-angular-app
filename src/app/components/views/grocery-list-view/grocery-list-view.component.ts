import { Component, OnInit } from '@angular/core';
import { GroceryListItemModel } from '../../../models/GroceryListItemModel'
import { GroceryListService } from '../../../services/grocery-list.service'

@Component({
  selector: 'app-grocery-list-view',
  templateUrl: './grocery-list-view.component.html',
  styleUrls: ['./grocery-list-view.component.css']
})
export class GroceryListViewComponent implements OnInit {
  groceryListItemModel: GroceryListItemModel[]

  constructor(private groceryListService:GroceryListService){}

  ngOnInit(): void {
    this.groceryListItemModel = this.groceryListService.getGroceryListItems();
  }

  addItem(item:GroceryListItemModel){
    
    console.log(item);
    let add = item;
    this.groceryListItemModel.push(add);
    console.log(this.groceryListItemModel);
    
  }

  deleteItem(item:GroceryListItemModel){
    console.log(item.id);
    console.log(this.groceryListItemModel);
    
    this.groceryListItemModel = this.groceryListItemModel.filter(x => x.id !== item.id);
  }
}
