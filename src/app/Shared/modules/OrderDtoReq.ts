import { FoodItem } from "./FoodItem";
import { Restaurant } from "./restaurant";

export interface OrderDtoReq
{
    foodItemDtoList?: FoodItem[],
    userId?:number,
    restaurant?:Restaurant
}