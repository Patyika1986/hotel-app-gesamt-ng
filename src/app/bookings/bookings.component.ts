import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-bookings',// mit derr selector kannst du das inhalt sichtbar machen.
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  // dependencies injektion damit hier kannst du dein services benutzen
  constructor(private bookingService:BookingService) { }

  bookings : Booking[] = [];
// Hook
  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }


      // element mit der button löschen die bearbeutung passiert in services
      deleteBooking(booking: Booking): void{
        this.bookingService.deleteBooking(booking);
      }

}
