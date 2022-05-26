import { Injectable } from '@angular/core'; // ermöglicht services überall zu verwenden in jeder component
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
// Services ist zu ständig für alle bearbeutungen
export class BookingService {

    constructor(private httpClient:HttpClient) { }
    // das ist der path zu http server
    bookingsUrl :string = '/api/bookings';

    getBookings() : Observable<Booking[]>{
      // anfrage
      let response = this.httpClient.get<Booking[]>(this.bookingsUrl);
      
      
      return response;
    }

    // element mit der button löschen
    deleteBooking(booking: Booking): Observable<Booking> {
     let response = this.httpClient.delete<Booking>(this.bookingsUrl + "/" + booking.id);
      return response;
    }

    getBookingById(id: number) : Observable<Booking> {
      let response = this.httpClient.get<Booking>(this.bookingsUrl + "/" +  id);

      return response;
    }

    addBooking(booking: Booking) : Observable<Booking> {
      let response = this.httpClient.post<Booking>(this.bookingsUrl, booking);
      return response;
    }

}
