import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryListItemComponent } from './components/grocery-list-item/grocery-list-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddGroceryListItemComponent } from './components/add-grocery-list-item/add-grocery-list-item.component';
import { HomeViewComponent } from './components/views/home-view/home-view.component';
import { GroceryListViewComponent } from './components/views/grocery-list-view/grocery-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryListItemComponent,
    HeaderComponent,
    AddGroceryListItemComponent,
    HomeViewComponent,
    GroceryListViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
