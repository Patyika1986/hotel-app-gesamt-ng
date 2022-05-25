import { Injectable } from '@angular/core'; // ermöglicht services überall zu verwenden in jeder component

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }
}
