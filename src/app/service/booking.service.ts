

import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

    constructor( private http: HttpClient) { }

    url:string = 'assets/mock.json';

    getBookings(){
      return this.http.get(this.url);
    }



}