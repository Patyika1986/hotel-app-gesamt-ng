import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';


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

  // element mit der button löschen
  deleteBooking(booking: Booking): void{
let index = Bookings.indexOf(booking);
    Bookings.splice(index,1);// splice löscht das eine element wo du cklickst
    console.log(index);

  }

}
