import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HolidaysOfferComponent } from './holidays-offer/holidays-offer.component';
import { HolidaysOfferElementComponent } from './holidays-offer-element/holidays-offer-element.component';
import { FormComponent } from './form/form.component';
import { FiltersComponent } from './filters/filters.component';
import { TrolleyComponent } from './trolley/trolley.component';
import { StarsComponent } from './stars/stars.component';
import { CommonModule } from '@angular/common';
import { FilterLocationPipe } from './filter-location.pipe';
import { FilterRatingPipe } from './filter-rating.pipe';
import { FilterPricePipe } from './filter-price.pipe';
import { FilterDatePipe } from './filter-date.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HolidaysOfferComponent,
    HolidaysOfferElementComponent,
    FormComponent,
    FiltersComponent,
    TrolleyComponent,
    StarsComponent,
    FilterLocationPipe,
    FilterRatingPipe,
    FilterPricePipe,
    FilterDatePipe,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
