import { FoodItem } from "./FoodItem";
import { Restaurant } from "./restaurant";


export interface FoodCatalogue{
        foodItemList : FoodItem[] ;
        restaurant: Restaurant;
}