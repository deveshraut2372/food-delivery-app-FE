import { Component, OnInit } from '@angular/core';
import { RestautantServiceService }  from '../services/restautant-service.service';
import { Restaurant } from 'src/app/Shared/modules/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent implements OnInit {

  constructor( private service : RestautantServiceService,
               private router : Router ,
              
              ) { }

  ngOnInit(): void {
    this.getAllRestaurant();
  }

  getAllRestaurant()
  {
    this.service.getAllRestaurants().subscribe((data)=>{
      this.restaurantList=data;
    })
  }


  getrandomIndex(min:number ,max : number)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  getRandomImages(): string {
    let count =7;
    let randomIndex=this.getrandomIndex(1,count);
    return "assets/image/restaurantimages/".concat(randomIndex.toString()).concat(".jpg");
  }
    
  public restaurantList : Restaurant[];


  onButtonClick(id:any)
  {
      this.router.navigate(['food-catalogue',id]);
  }

//   restaurantList = [
//   {

//     name: 'Dev Restaurant',
//     address: '123 Main St',
//     city: 'Pune',
//     restaurantDescription: 'Delicious food served with a smile!'
//   },
//   {

//     name: 'Spice Hub',
//     address: '456 MG Road',
//     city: 'Mumbai',
//     restaurantDescription: 'Best Indian cuisine.'
//   },
//   {

//     name: 'Food Corner',
//     address: '789 FC Road',
//     city: 'Pune',
//     restaurantDescription: 'Tasty and affordable meals.'
//   }
// ];




  

}
