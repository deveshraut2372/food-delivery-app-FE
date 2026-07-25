import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

import { API_URL_FC } from 'src/app/constant/url';


@Injectable({
  providedIn: 'root'
})
export class FoodCatalogueService {

  private apiUrl= API_URL_FC+'/foodcatalog/';

  constructor(private http: HttpClient ) { }

    getAllFoodCatalogueByRestaurantId(restaurantId:number) : Observable<any>
    {
      return this.http.get<any>(this.apiUrl+'fetchRestaurantAndFoodItemById/'+restaurantId)
        .pipe(
          catchError(this.handleError)
          );  
    }

    handleError(error:any)
    {
      console.error(error);
      return error.message || error;
    }


      // this.http.get<any>(this.apiUrl+restaurantId)
      // .subscribe(
      //   (response:any) =>{
      //       return response;
      //   },
      //   (error:any) =>{
      //       return error;
      //   });
    // }


}
