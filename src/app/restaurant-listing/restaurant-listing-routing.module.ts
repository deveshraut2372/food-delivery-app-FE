import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListingComponent } from './components/restaurant-listing.component';
import { FoodCatalogueComponent } from '../food-catalogue/components/food-catalogue.component';

const routes: Routes = [

  {path:'', component: RestaurantListingComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantListingRoutingModule { }
