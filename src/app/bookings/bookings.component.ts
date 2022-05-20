import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',// mit derr selector kannst du das inhalt sichtbar machen.
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

bookings = Bookings;
// Hook
  ngOnInit(): void {
  }

}
