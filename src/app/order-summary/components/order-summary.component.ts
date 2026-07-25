import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderDto } from 'src/app/Shared/modules/OrderDto';
import { FoodItem } from 'src/app/Shared/modules/FoodItem';
import { Restaurant } from 'src/app/Shared/modules/restaurant';
import { error } from '@angular/compiler/src/util';
import { OrderDtoReq } from 'src/app/Shared/modules/OrderDtoReq';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor(private  route : Router,
              private orderService: OrderService  ,
              private  rout:ActivatedRoute
     ) {
      
     }

     order : OrderDto ;
     obj:any;
     total :any = 0;
     foodItems:FoodItem[] = [];
     restaurant:Restaurant | undefined;
     alertMessage:string;

     showAlert :boolean = false;

     ngOnInit(): void {
      const data=this.rout.snapshot.queryParams['data'];

      this.obj=JSON.parse(data);
      this.obj.userId=1;
      this.order=this.obj;
      this.restaurant=this.order.restaurant;
      this.foodItems=this.order.foodItemList ?? [];
     
      console.log( " items =",this.foodItems);
      console.log(" restaurant =",this.restaurant);
      
      this.total=this.calculateTotal(this.foodItems);
      console.log("  total =",this.total);
      

      // this.total=this.order?.foodItemList?.reduce((acc , currentValue) =>{
      //   return acc + (currentValue.quantity * currentValue.price);
      // },0);
  }


  calculateTotal(foodItems:FoodItem[])
  { 
      console.log(" list =,"+foodItems);
     foodItems.forEach( food =>{
      this.total=this.total+(food.price*food.quantity);
     })
      return this.total;
  }



  saveOrder()
  {
    console.log("  call save "); 
    this.order.foodItemList=this.foodItems;
    this.order.restaurant=this.restaurant;
    this.order.userId=1;
      this.orderService.saveOrder(this.order).subscribe(
                (response)=>{
                  if(Object.keys(response).length > 2)
                  {
                    console.log( response );
                    this.showAlerts("success");
                  }else{
                    this.showAlerts("error");
                  }
                  }, error =>{
                    console.error( " Failed to save Data ",error);
                    this.showAlerts("error");
                  }
    )
  }

  showAlerts(type:string)
  {
      if(type==='success')
      {
        this.alertMessage="  Order Succesfully !"
      }else if(type==='error')
      {
        this.alertMessage="  Something went wrong  !"
      }

      this.showAlert=true;

      setTimeout(()=>{
        this.showAlert=false;
         this.route.navigateByUrl('');
      },3000)
  }

}
