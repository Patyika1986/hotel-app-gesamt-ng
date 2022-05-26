import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateBookingComponent } from './create-booking/create-booking.component';// das wurde hier installiert wegen das terminal befehl --module=app
import { FormsModule } from '@angular/forms'; // ist für die value von form value senden und empfangen an component
import { HttpClientModule } from '@angular/common/http'; // damit http unterstüzt wird.
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    CreateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
