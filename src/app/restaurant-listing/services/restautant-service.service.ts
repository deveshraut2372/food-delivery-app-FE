import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URL_RL } from 'src/app/constant/url';

@Injectable({
  providedIn: 'root'
})
export class RestautantServiceService {


   private apiUrl= API_URL_RL+"/restaurant";
   
  //  'http://localhost:9091/restaurants/fetchAllRestaurants';
  
  

  constructor(private http:HttpClient) {   }


  getAllRestaurants():Observable<any>{
    return this.http.get<any>(`${this.apiUrl+'/all'}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error :any)
  {
    console.error(error);
    return error.message || error;
  }

}
