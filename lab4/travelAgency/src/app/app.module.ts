import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolidaysOfferComponent } from './holidays-offer/holidays-offer.component';
import { HolidaysOfferElementComponent } from './holidays-offer-element/holidays-offer-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidaysOfferComponent,
    HolidaysOfferElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
