import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCatalogueService } from '../services/food-catalogue.service';
import { FoodCatalogue } from 'src/app/Shared/modules/FoodCatalogue';
import { FoodItem } from 'src/app/Shared/modules/FoodItem';
import { Restaurant } from 'src/app/Shared/modules/restaurant';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css']
})
export class FoodCatalogueComponent implements OnInit {


  
  constructor(private route: Router,
              private foodCatalogueService : FoodCatalogueService,
              private rout: ActivatedRoute

  ) { }

  restaurantId:any=0;
  foodCatalogue : FoodCatalogue ;
  restaurant :  Restaurant ;
  
  foodCart : FoodItem[]=[];
  orderSummary : FoodCatalogue ;

  ngOnInit(): void {
    
    this.restaurantId=this.rout.snapshot.paramMap.get('id');
  
    // this.rout.paramMap.subscribe(params =>{
    //   this.restaurantId= params.get('id');
    // });
    
    this.getAllFoodCatalogueByRestaurantId(this.restaurantId);
  }


  getAllFoodCatalogueByRestaurantId(restaurantId:number)
  {
      this.foodCatalogueService.getAllFoodCatalogueByRestaurantId(restaurantId)
      .subscribe((data:FoodCatalogue)=>{
          this.foodCatalogue=data;
          this.restaurant=this.foodCatalogue.restaurant;
           });
  }


  checkOut()
  {
      console.log(this.foodCart);
      console.log(this.restaurant);
      this.orderSummary={ 
        foodItemList:this.foodCart,
        restaurant:this.restaurant
      };

      this.orderSummary.foodItemList=this.foodCart;
      this.orderSummary.restaurant=this.restaurant;
      this.route.navigate(['orderSummary'],{queryParams:{data:JSON.stringify(this.orderSummary)}});

  }

  plus(item:FoodItem)
  {
    // console.log
    if(item.quantity===0)
    {
        item.quantity++;
        this.foodCart.push(item);
    }else if(item.quantity>0)
    {
      item.quantity++;
      let index=this.foodCart.findIndex( food => food.id===item.id);
      this.foodCart[index]=item;
    }
  }

  minus(item:FoodItem)
  {
      if(item.quantity>0)
      {
        item.quantity--;
        let index=this.foodCart.findIndex(food => food.id===item.id);
        this.foodCart[index]=item;
        // if(item.quantity===0||item.quantity<0)
        // {
        //   this.foodCart.pop(item);
        // }
      }
  }


}
