import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {TrolleyComponent} from '../trolley/trolley.component'
import {HolidaysOfferComponent} from '../holidays-offer/holidays-offer.component'
import {FormComponent} from '../form/form.component'
import {HolidayDetailsComponent} from '../holiday-details/holiday-details.component'
import {LoggingComponent} from '../logging/logging.component'
import {SigningUpComponent} from '../signing-up/signing-up.component'

import {AuthGuard} from '../guard/auth.guard'
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';


const routes: Routes = [
  { path: '', redirectTo: 'logging', pathMatch: 'full' },
  { path: 'holidaysOffer', component: HolidaysOfferComponent , canActivate: [AuthGuard] },
  { path: 'trolley', component:  TrolleyComponent, canActivate: [AuthGuard] },
  { path: 'form', component:  FormComponent, canActivate: [AuthGuard] },
  { path: 'holidaysOffer/details/:key', component:  HolidayDetailsComponent, canActivate: [AuthGuard] },
  { path: 'logging', component: LoggingComponent},
  { path: 'signingup', component: SigningUpComponent},
  { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'logging' , canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
