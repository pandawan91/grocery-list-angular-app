import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GroceryListItemModel } from "../../models/GroceryListItemModel";

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.css']
})
export class GroceryListItemComponent implements OnInit {
  @Input() item: GroceryListItemModel;
  @Output() deleteGroceryListItem: EventEmitter<GroceryListItemModel> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item){
    this.deleteGroceryListItem.emit(item);
  }
}
