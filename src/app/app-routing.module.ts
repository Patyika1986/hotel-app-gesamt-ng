import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';

// die router path festlegen
const routes: Routes = [
  {
    path: 'bookings', component:BookingsComponent // das ist hier die componente was angezeigt werden soll
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
