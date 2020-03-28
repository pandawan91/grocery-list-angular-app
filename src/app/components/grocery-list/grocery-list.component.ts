import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { GroceryListItemModel } from '../../models/GroceryListItemModel'
import { GroceryListService } from '../../services/grocery-list.service'

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  @Input() groceryListItemModel: GroceryListItemModel[]
  @Output() groceryListDeleteEvent: EventEmitter<GroceryListItemModel> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  deleteGroceryListItem(item:GroceryListItemModel){
    this.groceryListDeleteEvent.emit(item);
  }
}
