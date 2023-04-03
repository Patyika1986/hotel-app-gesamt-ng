import { Component, OnInit } from '@angular/core';
import { BookingService } from './../service/booking.service';
import { BehaviorSubject } from 'rxjs';
import { Booking } from './../interface/bookings';
import {map } from 'rxjs'

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.scss']
  })
  export class DataComponent implements OnInit {
  
    constructor(public bookingService:BookingService) { }
  
    lists:any;
    leng:number = 0;

    ngOnInit(): void {
      
     let list = this.bookingService.getBookings().subscribe(x => {  
      this.lists = x
      this.leng = this.lists.length
     });

     
      
    }
  
  }