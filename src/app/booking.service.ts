import { Injectable } from '@angular/core'; // ermöglicht services überall zu verwenden in jeder component
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
@Injectable({
  providedIn: 'root'
})
// Services ist zu ständig für alle bearbeutungen
export class BookingService {

  constructor() { }
  getBookings() : Booking[]{
    return Bookings;
  }

    // element mit der button löschen
    deleteBooking(booking: Booking): void{
      let index = Bookings.indexOf(booking);
      Bookings.splice(index,1);// splice löscht das eine element wo du cklickst
      console.log(index);
  
    }

    getBookingById(id: number) : Booking {
      let bookingById = Bookings.find(x => x.id == id)!; // gib mir zurück wo die id gleich ist.
      return bookingById;
    }

    addBooking(booking: Booking) : void{
      Bookings.push(booking); // In Bookings Component das booking value von inputs speichern
    }

    updateBooking(booking: Booking) : void{
      let currentBooking = this.getBookingById(booking.id);
      currentBooking = booking;
    }
}
