import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router,
     private activatedRoute: ActivatedRoute,
     private bookingService: BookingService) { }
  booking: Booking = {
  id: 100,
  name: 'Your Name',
  roomNumber: 100,
  startDate: new Date(),
  endDate: new Date()
}


  ngOnInit(): void {
    // wenn er auf der rout ist create dann soll nicht nach der id schauen
    // und wenn er auf der anderen seiten ist dann darf er schauen nach der id deshalb !=
    if(this.router.url != '/create'){
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id')); // hollt die id von der path url
      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
      });

    }


  }
save(): void{

  // wenn bereits das element in booking existiert dann nur value ändern und nicht zusätzlich hinzufügen

  this.bookingService.addBooking(this.booking).subscribe((result) => {});
  this.router.navigate(['bookings']); // nach dem senden navigiert zu bookings mit der Hilfe von constructor

  
}

// datum: in create anzeigen
dateChanged(event: Event, isStart: boolean): void{

  let val = (event.target as HTMLInputElement).value;
  if(isStart){
    this.booking.startDate = new Date(val);
  }else{
    this.booking.endDate = new Date(val);
  }

}


















}

//dependency injection: Stellt Services und Module bereit über so genante Constructor
// ActivatedRoute schaut auf welche Route du bist
