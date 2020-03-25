import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  getGroceryListItems(){
    return [
      {
        id: "1",
        name: "soap",
        quantity: 5
      },
      {
        id: "2",
        name: "toilet paper",
        quantity: 50
      }
    ]
  }
  constructor() { }
}
