import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Holiday } from '../holidays-offer-element/holiday';
import { ReservedHoliday } from '../holidays-offer/reservedHoliday';
import { DetailsObjectService } from '../services/details-object.service';
import { HolidaysService } from '../services/holidays.service';
import { TrolleyInteractionService } from '../services/trolley-interaction.service';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
  public holiday: Holiday;
  public rating: number;
  public placeReserved: number;
  ratingEmitter: any; // do zrobienia serwisem
  reserveEmitter: any; // do zrobienia serwisem
  constructor(private _interactionDetailsHolidayService: DetailsObjectService, private _interactionHolidaysService: HolidaysService, private _interactionTrolleyService: TrolleyInteractionService) { 
    this.holiday = this._interactionDetailsHolidayService.getHoliday();
    this.rating = this.holiday.rating;
    console.log(this.holiday);
    
  }

  ngOnInit(): void {
    this.placeReserved = 0;
    var reservedHolidays: Array<ReservedHoliday> = this._interactionTrolleyService.getReservedHolidays();
    for(let holiday of reservedHolidays){
      if(holiday.name === this.holiday.name){
        this.placeReserved = holiday.amount;
        break;
      }
    }
    
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
}
