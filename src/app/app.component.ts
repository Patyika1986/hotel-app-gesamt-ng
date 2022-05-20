import { Component } from '@angular/core';
// hier ist die verbindung zwischen die datein.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Das title ist ein Propeti
export class AppComponent {
  title = 'Hotel Buchungen';
}
