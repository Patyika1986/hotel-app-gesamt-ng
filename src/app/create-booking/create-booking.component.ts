import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { FormBuilder, Validators } from '@angular/forms'; // für die validierung gebraucht
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router,
     private activatedRoute: ActivatedRoute,
     private bookingService: BookingService,
     private formbuilder: FormBuilder) { }

     booking: Booking = {
     id: 100,
     name: 'Your Name',
     roomNumber: 100,
     startDate: new Date(),
     endDate: new Date()
    }
    // validierung: alle sind Pflicht felder
    bookingForm = this.formbuilder.group({
      id: ['',Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      roomNumber: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    }); 


  ngOnInit(): void {
    // wenn er auf der rout ist create dann soll nicht nach der id schauen
    // und wenn er auf der anderen seiten ist dann darf er schauen nach der id deshalb !=
    if(this.router.url != '/create'){
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id')); // hollt die id von der path url
      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;

        // setze denn wert von bookingForm zu booking
        this.bookingForm.setValue({
          id: this.booking.id,
          roomNumber: this.booking.roomNumber,
          name: this.booking.name,
          startDate: this.booking.startDate,
          endDate: this.booking.endDate
        })
      });

    }


  }
  // speichern booking ist ab jetzt bookingForm
save(): void{
  this.booking.id = this.bookingForm.get('id')?.value;
  this.booking.name = this.bookingForm.get('name')?.value;
  this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
  this.booking.startDate = this.bookingForm.get('startDate')?.value;
  this.booking.endDate = this.bookingForm.get('endDate')?.value;

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
