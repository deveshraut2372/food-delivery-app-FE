import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL_ORDER } from 'src/app/constant/url';
import { OrderDto } from 'src/app/Shared/modules/OrderDto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


   url= API_URL_ORDER+"/order/saveOrder";

  constructor(private  http:HttpClient ) { 

  }

  saveOrder(order:any) : Observable<any>
  {
    return this.http.post<any>(this.url, order)
      .pipe(
        catchError(this.handleError)
      );
  }


  handleError( error :any)
  {
    console.log("error =",error)
    console.error("error =",error)
    return error.message || error;
  }
  

}
