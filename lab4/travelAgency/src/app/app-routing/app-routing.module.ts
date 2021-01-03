import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {TrolleyComponent} from '../trolley/trolley.component'
import {HolidaysOfferComponent} from '../holidays-offer/holidays-offer.component'
import {FormComponent} from '../form/form.component'
import {HolidayDetailsComponent} from '../holiday-details/holiday-details.component'


const routes: Routes = [
  { path: '', redirectTo: 'holidaysOffer', pathMatch: 'full' },
  { path: 'holidaysOffer', component: HolidaysOfferComponent },
  { path: 'trolley', component:  TrolleyComponent},
  { path: 'form', component:  FormComponent},
  { path: 'holidaysOffer/details/:key', component:  HolidayDetailsComponent},
  { path: '**', redirectTo: 'holidaysOffer' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
