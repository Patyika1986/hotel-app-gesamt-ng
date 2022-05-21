import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';

// die router path festlegen
const routes: Routes = [
  {
    path: 'bookings', component:BookingsComponent // das ist hier die componente was angezeigt werden soll
  },
  {
    path: 'createBooking', component:CreateBookingComponent 
  },
  // start seite festlegen mit der gleiche inhalt von path bookings
  // redirectTo: wohin ? zu bookings
  // Automatische weiter Leitung zu der path
  // routh reigenfolge wichtig und der erste matcht immer wenn du zwei gleiche hast 
  // pathMatch full: ist das genau das soll anzeigen kommplet was auf der bookings seite ist.
  {
    path:'',redirectTo:'bookings',pathMatch:'full'
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)// forRoot weil du auf niedrigste ebene bist!
  ],
  //exports um das RouterModule auch wo anders auch benutzen zu können
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
