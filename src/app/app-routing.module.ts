import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './components/views/home-view/home-view.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryListViewComponent } from './components/views/grocery-list-view/grocery-list-view.component';


const routes: Routes = [
  { path: 'grocery-list', component: GroceryListViewComponent},
  { path: 'home', component: HomeViewComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
