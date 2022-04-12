import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
 

  baseUrl = "http://localhost:8080/trip/view";
  

  constructor(private httpClient : HttpClient) { }

   getTripList():Observable<Trip[]>{

    debugger;
    let headers = new HttpHeaders();

  return this.httpClient.get<Trip[]>(`${this.baseUrl}`);
}

createTrip(trip:Trip):Observable<Object>{

 
  let headers = new HttpHeaders();
  return this.httpClient.post(`${this.baseUrl}`,trip)
}


}
