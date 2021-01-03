import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrolleyInteractionService } from '../services/trolley-interaction.service';
import {Holiday} from './holiday'
import {ReservedHoliday} from '../holidays-offer/reservedHoliday'

@Component({
  selector: 'app-holidays-offer-element',
  templateUrl: './holidays-offer-element.component.html',
  styleUrls: ['./holidays-offer-element.component.css']
})

export class HolidaysOfferElementComponent implements OnInit{
  @Input()  public holiday: Holiday;
  @Input()  public minPrice: number;
  @Input()  public maxPrice: number;
  @Output() public removeCardEmitter = new EventEmitter;
  @Output() public reserveEmitter = new EventEmitter;
  public placeReserved: number;

  constructor(private _interactionTrolleyService: TrolleyInteractionService){}

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
  removeHolidayCard(){
    // remove place reserved from that holiday card when you remove it
    this.reserveEmitter.emit({
      value: -this.placeReserved, 
      holiday: this.holiday}
      );
    this.removeCardEmitter.emit(this.holiday);
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
