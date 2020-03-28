import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as uuid from 'uuid'

import { GroceryListItemModel } from '../../models/GroceryListItemModel'

@Component({
  selector: 'app-add-grocery-list-item',
  templateUrl: './add-grocery-list-item.component.html',
  styleUrls: ['./add-grocery-list-item.component.css']
})
export class AddGroceryListItemComponent implements OnInit {
  @Output() addGroceryListItemEmit: EventEmitter<GroceryListItemModel> = new EventEmitter();

  addGroceryListItemModel: GroceryListItemModel = { id: undefined, name: undefined, quantity: undefined};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){  
    if(this.addGroceryListItemModel.name && this.addGroceryListItemModel.quantity)

      this.addGroceryListItemEmit.emit({
        id: uuid.v4(),
        name: this.addGroceryListItemModel.name,
        quantity: this.addGroceryListItemModel.quantity
      });

      if(this.addGroceryListItemModel.name && this.addGroceryListItemModel.quantity){
        this.addGroceryListItemModel = { id: undefined, name: undefined, quantity: undefined};
      }
    }

}
