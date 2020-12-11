import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HolidaysOfferComponent } from './holidays-offer/holidays-offer.component';
import { HolidaysOfferElementComponent } from './holidays-offer-element/holidays-offer-element.component';
import { FormComponent } from './form/form.component';
import { FiltersComponent } from './filters/filters.component';
import { TrolleyComponent } from './trolley/trolley.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidaysOfferComponent,
    HolidaysOfferElementComponent,
    FormComponent,
    FiltersComponent,
    TrolleyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
