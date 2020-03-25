import { Component, OnInit } from '@angular/core';

import { GroceryListItemModel } from '../../models/GroceryListItemModel'
import { GroceryListService } from '../../services/grocery-list.service'

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceryListItemModel: GroceryListItemModel[]

  constructor(private groceryListService:GroceryListService) { }

  ngOnInit(): void {
    this.groceryListItemModel = this.groceryListService.getGroceryListItems();
  }

  deleteGroceryListItem(item:GroceryListItemModel){
    this.groceryListItemModel = this.groceryListItemModel.filter(x => x.id !== item.id);
  }
}
