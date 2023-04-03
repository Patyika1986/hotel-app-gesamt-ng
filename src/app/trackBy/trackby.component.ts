import { Component, OnInit } from '@angular/core';
import { DemoArray } from '../interface/demoArray';

@Component({
    selector: 'app-trackby',
    templateUrl: './trackby.component.html',
    styleUrls: ['./trackby.component.scss']
  })
  export class TrackbyComponent implements OnInit {
  
    constructor() { }



    /* vorhandene daten */
    public items: DemoArray[] = [
        { id: 0, name: 'Apfel' },
        { id: 1, name: 'Mango' },
        { id: 2, name: 'Birne' }, 
    ];

    /** neue dazu gekommen daten */
    public addSomething(): void {
        this.items = [
            { id: 0, name: 'Apfel' },
            { id: 1, name: 'Mango' },
            { id: 2, name: 'Birne' },
            { id: 3, name: 'Kiwi' },
            { id: 4, name: 'Mandarine' },
            { id: 5, name: 'Bannane' }
        ];
    }


    
    trackByFn(item:any){
        return item.id;
    }
  
    ngOnInit(): void {
    }
  
  }