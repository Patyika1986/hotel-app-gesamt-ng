import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router) { }
booking: Booking = {
  id: 100,
  name: 'Your Name',
  roomNumber: 100,
  startDate: new Date(),
  endDate: new Date()
}


  ngOnInit(): void {
  }
save(): void{
  Bookings.push(this.booking); // In Bookings Component das booking value von inputs speichern
  this.router.navigate(['bookings']); // nach dem senden navigiert zu bookings mit der Hilfe von constructor
  console.log('Gespeichert !');
  
}
}

//dependency injection: Stellt Services und Module bereit über so genante Constructor
