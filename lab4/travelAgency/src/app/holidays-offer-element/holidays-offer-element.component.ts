import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrolleyInteractionService } from '../services/trolley-interaction.service';

interface IHoliday{
  name: string,
  country: string,
  startDate: Date,
  endDate: Date,
  price: number,
  maxPlaces:  number,
  description: string,
  imgSrc: string,
  rating: number,
}

interface IReserved{
  name: string;
  amount: number;
  price: number;
}

@Component({
  selector: 'app-holidays-offer-element',
  templateUrl: './holidays-offer-element.component.html',
  styleUrls: ['./holidays-offer-element.component.css']
})

export class HolidaysOfferElementComponent implements OnInit{
  @Input()  public holiday: IHoliday;
  @Input()  public rating: number;
  @Input()  public maxPrice: number;
  @Input()  public minPrice: number;
  @Output() public removeCardEmitter = new EventEmitter;
  @Output() public reserveEmitter = new EventEmitter;
  @Output() public ratingEmitter = new EventEmitter;
  public placeReserved: number;

  constructor(private _interactionTrolleyService: TrolleyInteractionService){}

  ngOnInit(): void {
    this.placeReserved = 0;
    var reservedHolidays: Array<IReserved> = this._interactionTrolleyService.getReservedHolidays();
    for(let holiday of reservedHolidays){
      if(holiday.name === this.holiday.name){
        this.placeReserved = holiday.amount;
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
    this.ratingEmitter.emit(this.holiday)
  }

  removeHolidayCard(){
    console.log("jestem w HolidayCard");

    
    // remove place reserved from that holiday card when you remove it
    this.reserveEmitter.emit({
      value: -this.placeReserved, 
      holiday: this.holiday}
      );
    this.removeCardEmitter.emit(this.holiday);
  }

  reservePlace(){
    this.placeReserved++;
    this.reserveEmitter.emit({
      value: 1, 
      holiday: this.holiday}
      );
    console.log(this.holiday.name + " " + this.placeReserved);
  }

  cancelPlace(){
    this.placeReserved--;
    this.reserveEmitter.emit({
      value: -1, 
      holiday: this.holiday}
      );
    console.log(this.holiday.name + " " +this.placeReserved);
  }

}
