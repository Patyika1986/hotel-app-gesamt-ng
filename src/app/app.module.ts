import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { FirstComponent } from './first/first.component';
import { NavComponent } from "./nav.component";
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { DataComponent } from './data/data.component';
import { TrackbyComponent } from './trackBy/trackby.component'
@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        NavComponent,
        SecondComponent,
        ThirdComponent,
        DataComponent,
        TrackbyComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [

    BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
