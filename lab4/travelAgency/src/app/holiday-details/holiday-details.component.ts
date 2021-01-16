import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Holiday } from '../holidays-offer-element/holiday';
import { ReservedHoliday } from '../holidays-offer/reservedHoliday';
import { HolidaysService } from '../services/holidays.service';
import { TrolleyInteractionService } from '../services/trolley-interaction.service';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
  public holiday: any = {};
  public rating: number;
  public placeReserved: number;
  public key: string;
  constructor(private _interactionHolidaysService: HolidaysService, private _interactionTrolleyService: TrolleyInteractionService
    ,private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {this.key = params['key']});
      console.log(this.key);
    this.getSpecifiedHoliday(this.key);
  }

  ngOnInit(): void {
    // do zrobienia przycisk [Wroc]
  }

  // Used in to rating
  public stars = [1, 2, 3, 4, 5, 6]
  hoverState = 0
  
  onStarEnter(starId: number){
    this.hoverState = starId;
  }

  onStarLeave(){
    this.hoverState = 0;
  }

  onStarClick(starId: number){
    this.rating = starId;
    this.holiday.rating = this.rating; 
    this._interactionHolidaysService.updateHoliday(this.holiday.key, {rating: this.holiday.rating})
  }

  reservePlace(){
    this.placeReserved++;
    this._interactionTrolleyService.updateTrolley({
      value: 1, 
      holiday: this.holiday}
      );
  }

  cancelPlace(){
    this.placeReserved--;
    this._interactionTrolleyService.updateTrolley({
      value: -1, 
      holiday: this.holiday}
      );
  }

  getSpecifiedHoliday(key: string){
    var res: Holiday[];
    this._interactionHolidaysService.getHolidaysList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ( 
            {key: c.payload.key, ...c.payload.val()}
          )
        )
      )
    ).subscribe(
      holidays => {
         var _holidays = <Array<Holiday>>holidays;      
         res = _holidays.filter(h => h.key == key)
         this.holiday = res.pop()
         this.rating = this.holiday.rating;
         this.getAmountOfReserved()
      }
    );
  }

  getAmountOfReserved(){
    this.placeReserved = 0;
    var reservedHolidays: Array<ReservedHoliday> = this._interactionTrolleyService.getReservedHolidays();
    for(let holiday of reservedHolidays){
      console.log(holiday.name, this.holiday.name);
      if(holiday.name === this.holiday.name){
        this.placeReserved = holiday.amount;
        break;
      }
    }
  }

  getBack(){
    this.router.navigate(['holidaysOffer']);
  }
}
