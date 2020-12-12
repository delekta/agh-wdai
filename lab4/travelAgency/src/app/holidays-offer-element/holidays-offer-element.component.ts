import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

@Component({
  selector: 'app-holidays-offer-element',
  templateUrl: './holidays-offer-element.component.html',
  styleUrls: ['./holidays-offer-element.component.css']
})

export class HolidaysOfferElementComponent{
  @Input()  holiday: IHoliday;
  @Input()  public maxPrice: number;
  @Input()  public minPrice: number;
  @Output() public removeCardEmitter = new EventEmitter;
  @Output() public reserveEmitter = new EventEmitter;
  @Output() public ratingEmitter = new EventEmitter;


  public placeReserved: number = 0;

  // Used in to rating
  stars = [1, 2, 3, 4, 5, 6]
  rating = 0;
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
