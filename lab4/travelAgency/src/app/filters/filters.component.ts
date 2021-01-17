import { ChangeContext, Options, PointerType } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { FilterInteractionService } from '../services/filter-interaction.service';
import {Holiday} from '../holidays-offer-element/holiday'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() public holidays: Array<Holiday>;
  public stars: number[] = [];
  public locations: string[] = [];
  public priceRangeMax: number = 0;
  public priceRangeMin: number = 0;
  public dateRangeMax: Date = new Date(2030, 0, 1);
  public dateRangeMin: Date = new Date(1970, 0, 1);

  private starsChecked: number[] = [];
  private locationsChecked: string[] = [];

  options: Options = {
    floor: 0,
    ceil: 2000,
  };

  constructor(private _interactionFilterService: FilterInteractionService) {

   }

  ngOnInit(): void {
    this._interactionFilterService.holidays$.subscribe(
      holidays => {this.setHolidays(holidays)}
    )
    this.setHolidays(this.holidays) //[!]
  }

  setHolidays(holidays: Array<Holiday>){
    this.holidays = holidays;
    this.setAllAttributes();
  }

  setAllAttributes(){
    this.resetToDefault();
``
    for(let holiday of this.holidays){
      if(this.stars.indexOf(holiday.rating) === -1){
        this.stars = [...this.stars, holiday.rating]
      }
      if(this.locations.indexOf(holiday.country) === -1){
        this.locations = [...this.locations, holiday.country]
      }
      if(holiday.price > this.priceRangeMax){
        this.priceRangeMax = holiday.price;
      }
      if(holiday.price < this.priceRangeMin){
        this.priceRangeMin = holiday.price;
      }
      if(holiday.startDate < this.dateRangeMin){
        this.dateRangeMin = holiday.startDate;
      }
      if(holiday.endDate > this.dateRangeMax){
        this.dateRangeMax = holiday.endDate;
      }
      this.stars.sort()
    }
    // tests
    // console.log(this.stars);
    // console.log(this.locations);
    // console.log(this.priceRangeMax);
    // console.log(this.priceRangeMin);
    // console.log(this.dateRangeMax);
    // console.log(this.dateRangeMin);
    //Wazne
    
    // we must reassign options object to teload slider
    this.options = {
      floor: this.priceRangeMin,
      ceil: this.priceRangeMax,
    }
    this._interactionFilterService.sendMinPrice(this.priceRangeMin)
    this._interactionFilterService.sendMaxPrice(this.priceRangeMax)
  }

  resetToDefault(){
  this.stars = [];
  this.locations = [];
  this.priceRangeMax = Number.MIN_VALUE;
  this.priceRangeMin = Number.MAX_VALUE;
  this.dateRangeMax = new Date(1970, 0, 1);
  this.dateRangeMin = new Date(2030, 0, 1);
  }

  updateLocations(event){
    
    if(!event.srcElement.checked){
      this.locationsChecked = this.locationsChecked.filter(name => name !== event.srcElement.attributes.name.value);
    }else{
      this.locationsChecked = [...this.locationsChecked, event.srcElement.attributes.name.value];
    }
    this._interactionFilterService.sendFilteredLocations(this.locationsChecked)
  }

  updateStars(event){
    console.log(this.priceRangeMax);
    
    if(!event.srcElement.checked){
      this.starsChecked = this.starsChecked.filter(star => star !== parseInt(event.srcElement.attributes.name.value));;
    }else{
      this.starsChecked = [...this.starsChecked, parseInt(event.srcElement.attributes.name.value)];
    }
    this._interactionFilterService.sendFilteredStars(this.starsChecked)
  }

  onUserChange(changeContext: ChangeContext): void {
    this._interactionFilterService.sendMinPrice(this.priceRangeMin)
    this._interactionFilterService.sendMaxPrice(this.priceRangeMax)
  }
}
