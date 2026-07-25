import { FoodItem } from "./FoodItem";
import { Restaurant } from "./restaurant";

export interface OrderDto
{
    foodItemList?: FoodItem[],
    userId?:number,
    restaurant?:Restaurant
}